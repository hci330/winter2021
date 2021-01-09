---
layout: assignment-two-column
title: Configure Software Stack
type: lab
abbreviation: Lab 1
draft: 0
num: 1
description: |
    Setup MongoDB, Flask, GitHub
due_date: 2021-01-15
---

In today's lab, you will be doing four things:
1. Setting up a local Python web server
2. Setting up a cloud MongoDB database a cloud-hosted service
3. Creating a GitHub repo for your coursework
4. Deploying your Python web app to Heroku

## 1. Setting Up a Local Python Web Server

## 2. Setting Up MongoDB

MongoDB is a​cross-platform​ document-oriented database​ program. Classified as a ​NoSQL​ database program, MongoDB uses ​JSON-​ like documents with optional s​chemas​. MongoDB is developed by M​ongoDB Inc.​ and licensed under the Server Side Public License (Wikipedia)

We can use MongoDB by installing it on your computer or server(in production) or use MongoDB atlas, the global cloud database. In this course, we will use MongoDB atlas since its relatively easy to set up. However, this could have additional costs when scaling your application so I would advise further reading on installing MongoDB on your server and computer locally.


### MongoDB Cloud Setup
Login or signup for a <a href="https://account.mongodb.com/account/login" target="_blank">MongoDB​ account</a>.

#### A. Create a Project
Click on the "create a new project button". Type in the name of your project as “CS330” and click next. Ignore the add teammates prompt and finish the setup.

<img class="large frame" src="/winter2021/assets/images/lab01/ss1.png" />
   
#### B. Build a Cluster
Click on Build a Cluster. Select the free options on the next page.

<img class="large frame" src="/winter2021/assets/images/lab01/ss2.png" />

Do not change anything on this page and proceed to create a cluster. It might take several minutes so grab some coffee and relax.

#### C. Create a Database User
Next, set up a user and password that will be used by your web applications to access the database.

<img class="large frame" src="/winter2021/assets/images/lab01/ss3.png" />

Click on “Database Access” under SECURITY. Then click “Add New Database User”.

<img class="large frame" src="/winter2021/assets/images/lab01/ss4.png" />

Follow these configurations and use your unique username and password.

#### D. Grant Network Access
Finally, click “Network Access” just below the “Database Access” and click Add IP Address and then click “Allow access from Anywhere”. When deploying your backend to servers you will not have to reconfigure the IP address. Confirm to close and complete that step. This might take another few minutes so continue watching your TV show.

<img class="large frame" src="/winter2021/assets/images/lab01/ss5.png" />
 
We will use databases stored in this cluster in upcoming labs and homework assignments. Meanwhile, if you are curious about how to interact with MongoDB, take a look at their documentation on <a href="https://docs.mongodb.com/manual/crud/" target="_blank">CRUD operations​</a> (CRUD = "Create, Read, Update, & Delete").
 

### Connecting Your Database to Flask

### Testing Your Web App

## 3. Creating Your GitHub Repo

## 4. Deploying Your App to Heroku