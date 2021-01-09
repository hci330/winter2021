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
1. Setting up a cloud MongoDB database a cloud-hosted service
2. Setting up a local Python web server
3. Setting Up Git and GitHub
4. Deploying your Python web app to Heroku


## I. Set Up MongoDB

MongoDB is a​cross-platform​ document-oriented database​ program. Classified as a ​NoSQL​ database program, MongoDB uses ​JSON-​ like documents with optional s​chemas​. MongoDB is developed by M​ongoDB Inc.​ and licensed under the Server Side Public License (Wikipedia)

We can use MongoDB by installing it on your computer or server(in production) or use MongoDB atlas, the global cloud database. In this course, we will use MongoDB atlas since its relatively easy to set up. However, this could have additional costs when scaling your application so I would advise further reading on installing MongoDB on your server and computer locally.

### 1. Register w/MongoDB​ Website
Login or signup for a <a href="https://account.mongodb.com/account/login" target="_blank">MongoDB​ account</a>.

### 2. Create a Project
Click on the "create a new project button". Type in the name of your project as “CS330” and click next. Ignore the add teammates prompt and finish the setup.

<img class="large frame" src="/winter2021/assets/images/lab01/ss1.png" />
   
### 3. Build a Cluster
Click on Build a Cluster. Select the free options on the next page.

<img class="large frame" src="/winter2021/assets/images/lab01/ss2.png" />

Do not change anything on this page and proceed to create a cluster. It might take several minutes so grab some coffee and relax.

### 4. Create a Database User
Next, set up a user and password that will be used by your web applications to access the database.

<img class="large frame" src="/winter2021/assets/images/lab01/ss3.png" />

Click on “Database Access” under SECURITY. Then click “Add New Database User”.

<img class="large frame" src="/winter2021/assets/images/lab01/ss4.png" />

Follow these configurations and use your unique username and password.

### 5. Grant Network Access
Finally, click “Network Access” just below the “Database Access” and click Add IP Address and then click “Allow access from Anywhere”. When deploying your backend to servers you will not have to reconfigure the IP address. Confirm to close and complete that step. This might take another few minutes so continue watching your TV show.

<img class="large frame" src="/winter2021/assets/images/lab01/ss5.png" />
 
We will use databases stored in this cluster in upcoming labs and homework assignments. Meanwhile, if you are curious about how to interact with MongoDB, take a look at their documentation on <a href="https://docs.mongodb.com/manual/crud/" target="_blank">CRUD operations​</a> (CRUD = "Create, Read, Update, & Delete").


## II. Set Up a Local Python Web Server
Download the `cs330-web-server` zip file, unzip it, and move this folder to a place where you regularly save files for coursework (stay organized -- you'll be working with a lot of files in this class). When you're done, complete the following steps to set up your application:

### 1. Install dependencies using PIP
Open your terminal / command line and navigate to the `cs330-web-server` directory. Then, using the terminal, you will install all of your Python dependencies as follows:

```shell
# from the command line, navigate to this directory and run the following:
pip3 install -r requirements.txt
```

If you open the `requirements.txt` file and take a look at it, you'll note that you are installing a library called Flask, some libraries that support MongoDB-Python interoperability, and a few other utility libraries.


### 2. Connect your application to your database
TODO: 
* Teach students how to get their DB Connection string
* Teach them to never include their password in their Repo

### 3. Run your web app
To run:
```
export FLASK_APP=app.py
export FLASK_ENV=development
flask run
```

### 4. Test your web app
To test your web app, we will be using something called Postman. Please <a href="https://www.postman.com/downloads/">download Postman</a> (if you haven't already).

## III. Set Up Git and GitHub Repos
You are going to be using git (and some ther command line tools) to manage versions of your code, and to interact with GitHub and Heroku. 

### 1. Install / Register
If you haven't already:
1. Install git on your computer: <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" target="_blank">https://git-scm.com/book/en/v2/Getting-Started-Installing-Git</a>
2. Register for GitHub: <a href="https://github.com/join" target="_blank">https://github.com/join</a>

### 2. Do the Tutorial (Optional)
If you've never used GitHub or are relatively new to it:
1. Do the <a href="https://guides.github.com/activities/hello-world/" target="_blank">GitHub tutorial</a>. It is optional, but recommended for anyone new to GitHub.
2. Refer to the <a href="https://www.git-tower.com/blog/git-cheat-sheet/" target="_blank">Git Cheat Sheet</a> if you have questions about specific commands.

### 3. Configure Your Git and GitHub
Many of you already have a process for doing this, so feel free to do your own thing here. That said, if you're relatively new to this, here are some instructions:

#### GitHub
1. In your web browser, navigate to GitHub and create a new repository (see tutorial above if you don't know how).
2. Please make sure that you mark your repo "public."

#### Locally
When you're done, open your command line (on your local computer) and navigate to your `cs330-web-server` directory. Then:
1. Initialize a brand new git repo: `git init`
1. Connect your local repo to your GitHub repo: `git remote add origin <address-of-repo-on-github>`
1. Add all of your files to your local repo: `git add .`
1. Type `git status`, which will show you all of the files that your git repo is currently tracking.
1. Commit all of them: `git commit -am 'My first commit'`. Committing them is like "saving" them to a version (if you ever needed to later revert to a previous version of your code).
1. Push them to GitHub: `git push origin master`. "Pushing" transfers all of your committed files to your GitHub repo (on the cloud).

If you make any additional code changes, simply repeat steps 3-6 above.
  

## IV. Deploy Your App to Heroku

## V. Review the Checklist & Submit
Please verify that you have completed all of the steps, and then submit your work to Canvas:

### 1. Verify that you're done

{:.checkbox-list}
* App Configuration
   * You can run it locally (this works when you're running Flask: http://127.0.0.1:5000/)
   * The command listed in section II.4. ("test your web app") successfully create, read, update, and delete (CRUD) resources in your MongoDB database.
* GitHub Configuration
   * Your files have been committed and pushed to GitHub
   * You have taken care to not include your database password in your repo by creating a local, hidden file, `.env` that is excluded from your GitHub repo in the `.gitignore` file.
* Heroku Configuration
   * Your web server has been deployed to Heroku (and is therefore available to the world).

### 2. Submit to Canvas
When you are sure you have completed everything, please submit two links to Canvas:
1. The link to your live Heroku web server.
2. The link to your code on GitHub that powers your Heroku web server.
