// Secret Config
variable "access_key_id" {
  type        = string
  description = "Chave de acesso primária"
  default     = "AKIAYGC2ET2OYOHK4PFX"
}

variable "secret_key_id" {
  type        = string
  description = "Chave de acesso secreta"
  default     = "1JsxVXd/W4T4hJOMOlp7J9WyKgCLQU7dDhchJVfx"
}

variable "region_aws" {
  type        = string
  description = "Nome da região em que a conta vai estar localizada"
  default     = "us-east-1"
}

//Buckets Name

variable "bucket_document" {
  type    = string
  default = "nexly-documents-001"
}

variable "bucket_image_profile_students" {
  type    = string
  default = "nexly-profile-images-students-001"
}

variable "bucket_image_profile_producer" {
  type    = string
  default = "nexly-profile-images-producer-001"
}

variable "bucket_lessons_producer" {
  type    = string
  default = "nexly-lessons-producer-001"
}

// Ec2 Configs

variable "key_way" {
  type = string
  default = "./nexly-key.pub"
}

variable "ec2_name" {
  type = string
  default = "ami-06db4d78cb1d3bbf9"
}

variable "ec2_type" {
  type = string
  default = "t2.medium"
}