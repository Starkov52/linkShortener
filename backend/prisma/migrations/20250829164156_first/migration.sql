-- CreateTable
CREATE TABLE "public"."userData" (
    "id" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "region" TEXT,
    "browser" TEXT,
    "os" TEXT,

    CONSTRAINT "userData_pkey" PRIMARY KEY ("id")
);
