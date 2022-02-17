/*
  Warnings:

  - A unique constraint covering the columns `[sessionId]` on the table `Cookie` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Cookie_sessionId_key" ON "Cookie"("sessionId");
