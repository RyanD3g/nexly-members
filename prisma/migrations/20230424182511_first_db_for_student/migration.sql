-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cpf" TEXT,
    "phone" TEXT,
    "sex" TEXT,
    "photo" TEXT,
    "bio" TEXT,
    "code" TEXT,
    "codeDate" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address_By_Student" (
    "id" TEXT NOT NULL,
    "codeStreet" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "city" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Address_By_Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Courses_Student" (
    "id" TEXT NOT NULL,
    "nameCourse" TEXT NOT NULL,
    "tagCourse" TEXT NOT NULL,
    "lastSeen" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "studentCoursesId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Courses_Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_cpf_key" ON "Student"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Student_phone_key" ON "Student"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Address_By_Student_studentId_key" ON "Address_By_Student"("studentId");

-- AddForeignKey
ALTER TABLE "Address_By_Student" ADD CONSTRAINT "Address_By_Student_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courses_Student" ADD CONSTRAINT "Courses_Student_studentCoursesId_fkey" FOREIGN KEY ("studentCoursesId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
