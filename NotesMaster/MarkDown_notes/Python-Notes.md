# Python Notes

- Can you just keep editing .MD in Jupyter???
* The answer appears to be yes



## Vitual Env  

Use a .env file to open virtual environment specific to folder.

```
$ python3 -m venv .env --copies

$ ls -ah
.			.env			requirements.txt
..			.idea			src
```
To use environment... from folder where .env was created run:
```
$ . .env/bin/activate
```

## Pip install

pip installing a list of modules from a text file (requirements.txt)
```
$ pip install -r requirements.txt 
```