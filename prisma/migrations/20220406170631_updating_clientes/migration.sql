/*
  Warnings:

  - You are about to drop the column `tipoClientes` on the `clientes` table. All the data in the column will be lost.
  - Added the required column `tipoCliente` to the `clientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clientes" DROP COLUMN "tipoClientes",
ADD COLUMN     "tipoCliente" TEXT NOT NULL;
