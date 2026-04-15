-- CreateEnum
CREATE TYPE "InstitutionType" AS ENUM ('UNIVERSITY', 'COLLEGE');

-- AlterTable: Country - add new columns
ALTER TABLE "Country" ADD COLUMN "slug" TEXT;
ALTER TABLE "Country" ADD COLUMN "heroImage" TEXT;
ALTER TABLE "Country" ADD COLUMN "heroSubtitle" TEXT;
ALTER TABLE "Country" ADD COLUMN "heroStats" JSONB;
ALTER TABLE "Country" ADD COLUMN "overview" JSONB;
ALTER TABLE "Country" ADD COLUMN "details" JSONB;
ALTER TABLE "Country" ADD COLUMN "popularCourses" JSONB;
ALTER TABLE "Country" ADD COLUMN "admissionRequirements" JSONB;
ALTER TABLE "Country" ADD COLUMN "intakes" JSONB;
ALTER TABLE "Country" ADD COLUMN "scholarships" JSONB;

-- Backfill slug from name (lowercase, replace spaces with hyphens)
UPDATE "Country" SET "slug" = LOWER(REPLACE("name", ' ', '-')) WHERE "slug" IS NULL;

-- Make slug NOT NULL after backfill
ALTER TABLE "Country" ALTER COLUMN "slug" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Country_slug_key" ON "Country"("slug");
CREATE INDEX "Country_slug_idx" ON "Country"("slug");

-- AlterTable: University - add new columns
ALTER TABLE "University" ADD COLUMN "slug" TEXT;
ALTER TABLE "University" ADD COLUMN "location" TEXT;
ALTER TABLE "University" ADD COLUMN "image" TEXT;
ALTER TABLE "University" ADD COLUMN "qsRanking" TEXT;
ALTER TABLE "University" ADD COLUMN "tagline" TEXT;
ALTER TABLE "University" ADD COLUMN "type" "InstitutionType" NOT NULL DEFAULT 'UNIVERSITY';
ALTER TABLE "University" ADD COLUMN "fees" TEXT;
ALTER TABLE "University" ADD COLUMN "heroData" JSONB;
ALTER TABLE "University" ADD COLUMN "whySection" JSONB;
ALTER TABLE "University" ADD COLUMN "coursesData" JSONB;
ALTER TABLE "University" ADD COLUMN "admissionData" JSONB;
ALTER TABLE "University" ADD COLUMN "ctaData" JSONB;

-- Backfill slug from name
UPDATE "University" SET "slug" = LOWER(REPLACE("name", ' ', '-')) WHERE "slug" IS NULL;

-- Make slug NOT NULL after backfill
ALTER TABLE "University" ALTER COLUMN "slug" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "University_slug_key" ON "University"("slug");
CREATE INDEX "University_slug_idx" ON "University"("slug");
CREATE INDEX "University_type_idx" ON "University"("type");

-- CreateTable: Alumni
CREATE TABLE "Alumni" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "university" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "quote" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Alumni_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Alumni_country_idx" ON "Alumni"("country");
