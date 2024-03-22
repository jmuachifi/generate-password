# Flask/NodejsExpress - Generate Password
This a simple app to generate password using flask and Node JS Express framework.<br>

### Using Flask Framework
 - Build locally
```
cd flask
```
```
sudo apt update &&  apt install python3-pip
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```
```
python3 app.py
```
Access on your web
> http://localhost:5000/

- Build using docker
```
 docker build -t flask-passgen .
 docker run -dti -p 5000:5000 --name gpass flask-passgen:latest
```
- Build using Kubernetes
```
kubectl create ns flask
kubectl apply -f k8s-passgen-deployments.yaml -n flask
```
Access on your web
> http://your-domain-here/
- Undelpoy k8s Flask Framework
```
kubectl delete -f k8s-passgen-deployments.yaml -n flask
```
### Using Node JS Express Framework
Install Node.js by using official [documentation](https://nodejs.org/en/download/package-manager). <br>

- Build locally
```
cd express
npm install
DEBUG=myapp:* npm start
```
Access on your web
> http://localhost:3000/

If you want to build it in the beginning, consider the following:
>   npm install -g express-generator <br>
    express --view=ejs expresss <br>
    cd express <br>
    npm install <br>
    DEBUG=myapp:* npm start

- Build using docker
```
 docker build -t express-passgen .
 docker run -dti -p 3000:3000 --name gpass express-passgen:latest
```


