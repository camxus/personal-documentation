import React from 'react';

import './Serverless.css';

export const Page = () => {

  return (
    <article>
      <section>
        <h2>Deploy Applications to AWS with Serverless and CloudFormation</h2>

        <h3>Prerequisites</h3>
        <p>Before we dive into the deployment process, make sure you have the following prerequisites in place:</p>
        <ol>
          <li><strong>Node.js Project:</strong> Create a new Node.js project and set up the <code>package.json</code> file to manage your project's dependencies.</li>
          <li><strong>AWS Account:</strong> You'll need an AWS account to host your application. If you don't have one, you can sign up for a free tier account on the AWS website.</li>
        </ol>

        <h3>Setting Up Serverless</h3>
        <p>To simplify the deployment process, we'll be using the Serverless Framework. Follow these steps to set it up:</p>

        <h4>Step 1: Install Serverless</h4>
        <p>You can install Serverless globally on your system using npm (Node Package Manager) with the following command:</p>
        <pre><code>npm install -g serverless</code></pre>

        <h4>Step 2: Initialize Serverless</h4>
        <p>After installing Serverless, initialize your project with the following command:</p>
        <pre><code>serverless</code></pre>
        <p>This command will guide you through the setup process. Here's what to expect:</p>

        <h5>Serverless Dashboard Configuration</h5>
        <p>You'll have the option to access the Serverless Dashboard, which allows you to create a CloudFormation stack. If you're using the root user of your AWS account, you can proceed with the default settings recommended by Serverless.</p>

        <h5>AWS IAM User Configuration</h5>
        <p>For improved security and best practices, it's advisable to avoid using the root user for your AWS deployments. Instead, create a new IAM (Identity and Access Management [Not to be confused with IAM Identity Center. This can be used to create Development Environments]) user. Follow these steps:</p>
        <ol>
          <li>In your AWS console, navigate to the IAM service.</li>
          <li>Create a new user and grant it "AdministratorAccess" permissions.</li>
        </ol>
        <p>After creating the user, generate an access key. You'll need both the Access Key ID and Secret Access Key to connect Serverless to AWS.</p>

        <h5>Connect Serverless to AWS</h5>
        <p>Return to your Serverless Dashboard and connect it to AWS using the credentials of the IAM user you just created. Set this provider as the default.</p>

        <h4>Step 3: Deploy Your Application</h4>
        <p>With Serverless and AWS configured, you can now proceed with deploying your application. Navigate to your project directory and run the following command:</p>
        <pre><code>serverless deploy</code></pre>
        <p>Serverless will package and deploy your application to AWS using CloudFormation templates. This process automates the deployment of your application, including creating the necessary AWS resources, such as Lambda functions, API Gateway endpoints, and more.</p>

        <h3>Conclusion</h3>
        <p>Deploying applications to AWS using Serverless and CloudFormation offers a streamlined and efficient way to manage your infrastructure and application code. By following the steps outlined in this article, you can easily set up your development environment, connect it to AWS securely, and deploy your applications with ease. Embracing serverless architecture and Infrastructure as Code (IaC) practices can help you build scalable and cost-effective solutions in the cloud.</p>

      </section>
    </article>
  );
};
