import { Database } from "sqlite";
import { createExpenseServer, deleteExpense, getExpenses } from "./utils/expense-utils";
import { Request, Response } from 'express';

export function createExpenseEndpoints(app: any, db: Database) {
  app.post("/expenses", (req: Request, res: Response) => createExpenseServer(req, res, db));
  app.delete("/expenses/:id", (req: Request, res: Response) => deleteExpense(req, res, db));
  app.get("/expenses", (req: Request, res: Response) => getExpenses(req, res, db));
}
