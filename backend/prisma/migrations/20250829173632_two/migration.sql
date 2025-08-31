/*
  Warnings:

  - You are about to drop the `userData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."userData";

-- CreateTable
CREATE TABLE "public"."ShortLink" (
    "id" SERIAL NOT NULL,
    "originalUrl" TEXT NOT NULL,
    "shortUrl" TEXT NOT NULL,

    CONSTRAINT "ShortLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserData" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "region" TEXT,
    "browser" TEXT,
    "os" TEXT,
    "shortLinkId" INTEGER NOT NULL,

    CONSTRAINT "UserData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShortLink_shortUrl_key" ON "public"."ShortLink"("shortUrl");

-- AddForeignKey
ALTER TABLE "public"."UserData" ADD CONSTRAINT "UserData_shortLinkId_fkey" FOREIGN KEY ("shortLinkId") REFERENCES "public"."ShortLink"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
