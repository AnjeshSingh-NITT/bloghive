import { Client, ID, Databases, Storage, Query, TablesDB } from 'appwrite';
import conf from '../conf/conf.js';

export class Service{
    client = new Client();
    // databases;
    tablesDB;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        // this.databases = new Databases(this.client);
        this.tablesDB = new TablesDB(this.client);
        this.bucket = new Storage(this.client);
    }
    
    // deprecated method for createPost:

    // async createPost1({title,slug,content,featuredImage,status,userId}){
    //     try {
    //         return await this.databases.createDocument({
    //             databaseId: conf.appwriteDatabaseId,
    //             collectionId: conf.appwriteTableId,
    //             documentId: slug,
    //             data: {
    //                 title,
    //                 content,
    //                 featuredImage,
    //                 status,
    //                 userId
    //             }
    //         })
    //     } catch (error) {
    //         console.log("Appwrite service createPost error:", error);
    //     }
    // }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.tablesDB.createRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            })
        } catch (error) {
            console.log("Appwrite service createPost error:", error);
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.tablesDB.updateRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug,
                data: {
                    title, content, featuredImage, status 
                }
            })
        } catch (error) {
            console.log("Appwrite service updatePost error:", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.tablesDB.deleteRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug,
            });
            return true;
        } catch (error) {
            console.log("Appwrite service deletePost error:", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.tablesDB.getRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug,
            })
        } catch (error) {
            console.log("Appwrite service getPost error:", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal('status','active')]){
        try {
            return await this.tablesDB.listRows({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                queries
            })
        } catch (error) {
            console.log("Appwrite service getPosts error:", error);
            return false;
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile({
                bucketId: conf.appwriteBucketId,
                fileId: ID.unique(),
                file
            })
        } catch (error) {
            console.log("Appwrite service uploadFile error:", error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId: fileId,
            })
            return true;
        } catch (error) {
            console.log("Appwrite service deleteFile error:", error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview({
            bucketId: conf.appwriteBucketId,
            fileId: fileId,
        })
    }
    // storage.getFilePreview({
    // bucketId: '<BUCKET_ID>',
    // fileId: '<FILE_ID>',
        
}

const service = new Service();

export default service;