from fastapi import FastAPI

app = FastAPI()

expenses= [
    {
        "id":1,
        "description":"Train ticket",
        "amount": 45.50,
        "status":"pending"
    },
    {
        "id":1,
                "description":"lunch",
                "amount": 18.00,
                "status":"approved"
    }
]

@app.get("/")
def root():
    return {
        "message": "Expense Manager API is running"
    }

@app.get("/expenses")
def get_expenses():
    return expenses

@app.post("/expenses")
def create_expense(expense:dict):
    expenses.append(expense)

    return{
        "message":"expense created",
        "expense": expense
    }