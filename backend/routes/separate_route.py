from datetime import datetime, timedelta
from flask import jsonify, abort, request, Blueprint

from validate_email import validate_email

from flask import Flask,render_template, request

import MySQLdb

separate_route = Blueprint('separate_route', __name__)

def get_blueprint():
    """Return the blueprint for the main app module"""
    return separate_route


@separate_route.route('/create-user', methods=['POST'])
def create_record2():
    """Create a book request record
    @param email: post : the requesters email address
    @param title: post : the title of the book requested
    @return: 201: a new_uuid as a flask/response object \
    with application/json mimetype.
    @raise 400: misunderstood request
    """
    if not request.get_json():
        abort(400)
    data = request.get_json(force=True)

    if not data.get('email'):
        abort(400)
    if not validate_email(data['email']):
        abort(400)
    if not data.get('password'):
        abort(400)

    db = MySQLdb.connect(host="localhost",    # your host, usually localhost
                     user="root",         # your username
                     passwd="",  # your password
                     db="flask")    
    cur = db.cursor()

    # Use all the SQL you like
    sql_statement = "INSERT INTO `users` (`id`, `email`, `password`) VALUES (NULL, '"+str(data['email'])+"', '"+ str(data['password']) +"');"
    # sql_statement = "INSERT INTO `users` VALUES (1, '" + str(data['email']) + "', '" + "' );"
    print(sql_statement)
    cur.execute(sql_statement)
    db.commit()
    # db.close()
    # HTTP 201 Created
    return jsonify({"status": True}), 201