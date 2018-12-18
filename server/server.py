from flask import Flask, render_template

app = Flask(__name__, static_folder="../src/index.js", template_folder="../src")

@app.route("/")
def index():
    return render_template("index.js")

if __name__ == "__main__":
    app.run()
