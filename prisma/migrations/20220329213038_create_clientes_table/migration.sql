-- CreateTable
CREATE TABLE "clientes" (
    "id" TEXT NOT NULL,
    "tipoClientes" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "nomeFantasia" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nomeContato" TEXT NOT NULL,
    "telefoneContato" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "desconto" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);
