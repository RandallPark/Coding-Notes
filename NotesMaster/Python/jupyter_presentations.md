# Creating slides from Jupyter Notebooks

[Medium Article](https://medium.com/learning-machine-learning/present-your-data-science-projects-with-jupyter-slides-75f20735eb0f)

TLDR 
 
- The '*' represents notebook name.

```
jupyter nbconvert *.ipynb --to slides --post serve
```
- Optional configuration I’ve used with ```SlidesExporter```.  

```
jupyter nbconvert dino_viz.ipynb --to slides --post serve 
--SlidesExporter.reveal_theme=serif 
--SlidesExporter.reveal_scroll=True 
--SlidesExporter.reveal_transition=none
```
