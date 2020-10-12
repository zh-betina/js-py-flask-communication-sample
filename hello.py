from flask import Flask, jsonify, render_template
app = Flask(__name__)
app.debug = True

@app.route("/hello")
def sendHtml():
    return render_template('index.html')


@app.route("/result", methods=["GET"])
def sendJson():

    #headers = {"Content-Type": "application/json"}
    msg = { 'hi' : 'working',
    'number' : 10,
    'boolean' : False }
    return jsonify(msg)


if (__name__ == "__main__"):
    app.run(port=4890)