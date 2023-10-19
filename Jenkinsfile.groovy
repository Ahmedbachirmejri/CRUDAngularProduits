pipeline {
    agent any
    
    environment {
        NODEJS_VERSION = '18'
        ANGULAR_CLI_VERSION = '16.1.4'
    }
    
    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 'c66b4b7a-ee9b-4c21-aee2-e89c1d65d1d2', url: 'https://github.com/Ahmedbachirmejri/CRUDAngularProduits'
                checkout scm
            }
        }
        stage('Debug') {
            steps {
                sh 'ls -la'  // List files in the workspace
                sh 'env'     // Display environment variables
                sh 'git remote -v'  // Show Git remote information
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install -g @angular/cli@${ANGULAR_CLI_VERSION}'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'ng build --prod'
            }
        }

        stage('Test') {
            steps {
                sh 'ng test'
            }
        }

        stage('Deploy') {
            steps {
            }
        }
    }
}
