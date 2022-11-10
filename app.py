from flask import Flask, render_template

app = Flask(__name__)

@app.route("/index.html")
def index():
    return render_template("index.html")

@app.route("/App.html")
def inicial(nivel):
    return render_template("App.html",nivel=nivel)

@app.route("/vitoria.html")
def vitoria():
    return render_template("vitoria.html")

@app.route("/fim_de_jogo.html")
def fim_de_jogo():
    return render_template("fim_de_jogo.html")

if __name__ == "__main__":
    app.run(debug=True)

