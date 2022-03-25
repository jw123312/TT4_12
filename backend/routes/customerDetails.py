class customer:
    def __init__(self, name, phone, address, balance, id = None):
        self.name = name
        self.phone = phone
        self.address = address
        self.balance = balance
        self.id = id

    def getName(self):
        return self.name
    def setName(self, name):
        self.name = name

    def getPhone(self):
        return self.phone
    def setPhone(self, phone):
        self.phone = phone

    def getAddress(self):
        return self.address
    def setAddress(self, address):
        self.address = address

    def getBalance(self):
        return self.balance
    def setBalance(self, balance):
        self.balance = balance

    def getId(self):
        return self.id
    def setId(self, id):
        self.id = id




