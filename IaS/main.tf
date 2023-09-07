terraform {
  required_version = "1.5.6"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.15.0"
    }
  }
}

provider "aws" {
  region     = var.region_aws
  access_key = var.access_key_id
  secret_key = var.secret_key_id
}


# ---------- Bucket For Documents ---------- 

resource "aws_s3_bucket" "nexly_bucket_document" {
  bucket = var.bucket_document

  tags = {
    Name        = "Bucket para upload de docs"
    Environment = "Dev e prod"
    Menage      = "Terraform"
    Owner       = "RyanD3g"
  }
}

resource "aws_s3_bucket_ownership_controls" "controle_de_propriedade_documentos" {
  bucket = aws_s3_bucket.nexly_bucket_document.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "controle_de_acls_documentos" {
  bucket = aws_s3_bucket.nexly_bucket_document.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "acls_documentos" {
  depends_on = [
    aws_s3_bucket_ownership_controls.controle_de_propriedade_documentos,
    aws_s3_bucket_public_access_block.controle_de_acls_documentos,
  ]
  bucket = aws_s3_bucket.nexly_bucket_document.id
  acl    = "private"
}

# ---------- Bucket For Students Images ---------- 

resource "aws_s3_bucket" "nexly_bucket_profile_image_students" {
  bucket = var.bucket_image_profile_students
  tags = {
    Name        = "Bucket para upload de imagens de estudantes ou usuarios"
    Environment = "Dev e prod"
    Menage      = "Terraform"
    Owner       = "RyanD3g"
  }
}

resource "aws_s3_bucket_ownership_controls" "controle_de_propriedade_students" {
  bucket = aws_s3_bucket.nexly_bucket_profile_image_students.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "controle_de_acls_students" {
  bucket = aws_s3_bucket.nexly_bucket_profile_image_students.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "acls_students" {
  depends_on = [
    aws_s3_bucket_ownership_controls.controle_de_propriedade_students,
    aws_s3_bucket_public_access_block.controle_de_acls_students,
  ]
  bucket = aws_s3_bucket.nexly_bucket_profile_image_students.id
  acl    = "private"
}

# ---------- Bucket For Producer Images ---------- 

resource "aws_s3_bucket" "nexly_bucket_profile_image_producer" {
  bucket = var.bucket_image_profile_producer
  tags = {
    Name        = "Bucket para upload de imagens de produtores"
    Environment = "Dev e prod"
    Menage      = "Terraform"
    Owner       = "RyanD3g"
  }
}

resource "aws_s3_bucket_ownership_controls" "controle_de_propriedade_producer" {
  bucket = aws_s3_bucket.nexly_bucket_profile_image_producer.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "controle_de_acls_producer" {
  bucket = aws_s3_bucket.nexly_bucket_profile_image_producer.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "acls_producer" {
  depends_on = [
    aws_s3_bucket_ownership_controls.controle_de_propriedade_producer,
    aws_s3_bucket_public_access_block.controle_de_acls_producer,
  ]
  bucket = aws_s3_bucket.nexly_bucket_profile_image_producer.id
  acl    = "private"
}


# ---------- Bucket For Courses Lessons ---------- 

resource "aws_s3_bucket" "nexly_bucket_lessons_producer" {
  bucket = var.bucket_lessons_producer
  tags = {
    Name        = "Bucket para upload de imagens de produtores"
    Environment = "Dev e prod"
    Menage      = "Terraform"
    Owner       = "RyanD3g"
  }
}

resource "aws_s3_bucket_ownership_controls" "controle_de_propriedade_lessons" {
  bucket = aws_s3_bucket.nexly_bucket_lessons_producer.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "controle_de_acls_lessons" {
  bucket = aws_s3_bucket.nexly_bucket_lessons_producer.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "acls_lessons" {
  depends_on = [
    aws_s3_bucket_ownership_controls.controle_de_propriedade_lessons,
    aws_s3_bucket_public_access_block.controle_de_acls_lessons,
  ]
  bucket = aws_s3_bucket.nexly_bucket_lessons_producer.id
  acl    = "private"
}

# EC2 CONFIGS

resource "aws_key_pair" "key_instance" {
  key_name = "nexly-key"
  public_key = file(var.key_way)
}

resource "aws_instance" "intance_debian" {
  ami           = var.ec2_name
  instance_type = var.ec2_type
  key_name = aws_key_pair.key_instance.key_name
  associate_public_ip_address = true
}

