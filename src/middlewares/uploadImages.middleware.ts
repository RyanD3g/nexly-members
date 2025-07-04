import * as path from "path";
import * as crypto from 'crypto';
import * as multer_s3 from 'multer-s3';
import { S3Client } from '@aws-sdk/client-s3';

import { FileFilterCallback } from 'multer';
import { Request, Response } from 'express';

const s3_ = new S3Client({
    region: 'us-east-1',
    credentials:{
        accessKeyId: 'AKIAYGC2ET2OSDQ6LBJ5',
        secretAccessKey: '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'
    },
});

export const configsMulterStudentImages = {
    dest: './',
    storage: multer_s3({
        s3: s3_,
        bucket: 'nexly-profile-images-students-001',
        contentType: multer_s3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, callback) =>{
            const hash = crypto.randomBytes(16).toString('hex');
            const filename = `${hash} - ${file.originalname}`;
            callback(null, filename);
        },
    }),
    fileFilter: (req:Request, file:Express.Multer.File, cb:FileFilterCallback) => {
        const allowFiles = ['image/png','image/jpg', 'image/jpeg'];
        if(!allowFiles.includes(file.mimetype)){
            cb(new Error('Invalid file types'));
        }else{
            cb(null, true);
        };
    },
    limits:{
        fileSize: 50 * 1024 * 1024,
    },
};

export const configsMulterProducerImages = {
    dest: './',
    storage: multer_s3({
        s3: s3_,
        bucket: 'nexly-profile-images-producer-001',
        contentType: multer_s3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, callback) =>{
            const hash = crypto.randomBytes(16).toString('hex');
            const filename = `${hash} - ${file.originalname}`;
            callback(null, filename);
        },
    }),
    fileFilter: (req:Request, file:Express.Multer.File, cb:FileFilterCallback) => {
        const allowFiles = ['image/png','image/jpg', 'image/jpeg'];
        if(!allowFiles.includes(file.mimetype)){
            cb(new Error('Invalid file types'));
        }else{
            cb(null, true);
        };
    },
    limits:{
        fileSize: 50 * 1024 * 1024,
    },
};

export const configsMulterCourseImages = {
    dest: './',
    storage: multer_s3({
        s3: s3_,
        bucket: 'nexly-course-images-producer-001',
        contentType: multer_s3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, callback) =>{
            const hash = crypto.randomBytes(16).toString('hex');
            const filename = `${hash} - ${file.originalname}`;
            callback(null, filename);
        },
    }),
    fileFilter: (req:Request, file:Express.Multer.File, cb:FileFilterCallback) => {
        const allowFiles = ['image/png','image/jpg', 'image/jpeg'];
        if(!allowFiles.includes(file.mimetype)){
            cb(new Error('Invalid file types'));
        }else{
            cb(null, true);
        };
    },
    limits:{
        fileSize: 50 * 1024 * 1024,
    },
}