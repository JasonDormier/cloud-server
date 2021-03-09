# Lab 16: AWS Cloud Servers

Deploy a Node.js server to AWS EC2

## Author: Jason Dormier

### Link to GitHub [repository](https://github.com/JasonDormier/cloud-server)

## Deployed Links
- GUI deployed server [here]http://basicexpressserver-env.eba-d296yg2f.us-east-2.elasticbeanstalk.com/)
- CLI deployed server [here](http://basic-env.eba-ep7u8iiw.us-west-2.elasticbeanstalk.com/)

### Creating an application with the Elastic Beanstalk GUI
- Ensure repo has server setup but has no database
- PORT is set in .env file
- Choose NodeJS as your platform
- Create and upload a .zip file with your application source code
  - Do not include `node_modules` or `package-lock.json`

This will create your application and environment in one step, giving you a full GUI from where you can manage the app

![GUI](./assets/eb-gui.png)


### Creating an application using the command line only

First, ensure that you've installed the [aws cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) and the [aws eb](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html) command line utilities.

1. `eb init` - Initializes your folder as an Elastic Beanstal application
   - Choose your region (`us-west-2`)
   - Choose `[Create new Application]`
     - Note: If you already have an application, you could also choose that to connect
   - Answer the other questions as appropriate
     - Choose Node.js at the correct version
1. `eb create my-environment-name` - Create an "environment" for your app to reside in
1. `eb deploy` to deploy your new application to your new environment
   - You'll also use this whenever you make code changes


You can then use some other `eb` commands to manage your apps

- `eb open` to open your app in the browser
- `eb list` to get a list of apps
- `eb ssh` to ssh (login) to one of your apps
- `eb health` to get a health check on  your environments

