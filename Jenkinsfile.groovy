pipeline {
    agent any
    
    environment {
        NODEJS_VERSION = '18'
        ANGULAR_CLI_VERSION = '16.1.4'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
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
