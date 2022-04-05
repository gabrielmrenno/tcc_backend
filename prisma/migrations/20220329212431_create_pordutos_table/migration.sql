-- CreateTable
CREATE TABLE "produtos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "grupo" TEXT NOT NULL,
    "unidade" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);
