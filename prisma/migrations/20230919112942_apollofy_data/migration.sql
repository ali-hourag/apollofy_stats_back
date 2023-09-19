-- CreateTable
CREATE TABLE "UserData" (
    "id" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "views" INTEGER NOT NULL,
    "followers" INTEGER NOT NULL,
    "shared" INTEGER NOT NULL,

    CONSTRAINT "UserData_pkey" PRIMARY KEY ("id")
);
