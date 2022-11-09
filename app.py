from flask import Flask, render_template
import image

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/App")
def inicial():
    return render_template("App.html")

@app.route("/vitoria")
def vitoria():
    return render_template("vitoria.html")

@app.route("/fim_de_jogo")
def fim_de_jogo():
    return render_template("fim_de_jogo.html")

if __name__ == "__main__":
    app.run(debug=True)

