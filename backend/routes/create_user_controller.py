from datetime import datetime, timedelta
from flask import jsonify, abort, request, Blueprint

from validate_email import validate_email

from flask import Flask,render_template, request

import MySQLdb

separate_route = Blueprint('separate_route', __name__)
db, cur = None, None


def get_blueprint():
    """Return the blueprint for the main app module"""
    return separate_route


def get_connection():
    global db
    global cur

    if db == None or cur == None:
        db = MySQLdb.connect(host="localhost",    # your host, usually localhost
                        user="dbs",         # your username
                        passwd="password",  # your password
                        db="loan_management")    
        cur = db.cursor()

    return cur, db

@separate_route.route('/create-user', methods=['POST'])
def create_record():
    """Create a book request record
    @param name  
    @param phone
    @param address
    @param balance
    @return: 201: a new_uuid as a flask/response object \
    with application/json mimetype.
    @raise 400: misunderstood request
    """
    data = request.get_json(force=True)
    
    #TODO store in customerDetails
    # and check that fields are given
    '''
    if not request.get_json():
        abort(400)
    data = request.get_json(force=True)

    if not data.get('email'):
        abort(400)
    if not validate_email(data['email']):
        abort(400)
    if not data.get('password'):
        abort(400)
    '''
    cur, db = get_connection()

    # Use all the SQL you like
    sql_statement = "INSERT INTO `customer` (`CustomerId`, `customer_name`, `customer_phone`,`customer_address`, `balance`) VALUES (NULL, '"+str(data['name'])+"', '" +str(data['phone'])+"', '" +str(data['address'])+"', '" + str(data['balance']) +"');"
    print(sql_statement)
    cur.execute(sql_statement)
    db.commit()
    #db.close()
    # HTTP 201 Created
    return jsonify({"status": True}), 201

