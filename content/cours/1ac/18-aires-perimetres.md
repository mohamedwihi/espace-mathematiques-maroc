---
id: 1ac-aires-perimetres
titre: Surfaces et périmètres
niveau: 1ac
semestre: 2
duree: 4 heures
---

## Objectifs
- Calculer le périmètre d’une figure.
- Connaître et utiliser les formules d’aire des figures usuelles.
- Calculer l’aire d’une figure composée en la décomposant.
- Convertir des unités de longueur et d’aire.

## Prérequis
- Triangles, quadrilatères particuliers, cercle.
- Opérations sur les décimaux.

# I. Périmètre

:::definition
Le **périmètre** d’une figure est la longueur de son contour. Pour un polygone, c’est la somme des longueurs de ses côtés.
:::

:::propriete Formules
| Figure | Périmètre |
|---|---|
| Carré de côté $c$ | $P=4c$ |
| Rectangle de longueur $L$ et largeur $\ell$ | $P=2(L+\ell)$ |
| Losange de côté $c$ | $P=4c$ |
| Triangle de côtés $a$, $b$, $c$ | $P=a+b+c$ |
| Cercle de rayon $r$ | $P=2\pi r$ |
:::

:::regle Unités de longueur
Unités, de la plus grande à la plus petite : km, hm, dam, m, dm, cm, mm.
On passe d’une unité à l’unité immédiatement inférieure en multipliant par $10$ : $1$ m $=10$ dm $=100$ cm $=1000$ mm.
:::

# II. Aires des figures usuelles

:::propriete Formules
| Figure | Aire |
|---|---|
| Carré de côté $c$ | $\mathcal A=c^2$ |
| Rectangle | $\mathcal A=L\times\ell$ |
| Parallélogramme de base $b$ et hauteur $h$ | $\mathcal A=b\times h$ |
| Triangle de base $b$ et hauteur $h$ | $\mathcal A=\dfrac{b\times h}2$ |
| Losange de diagonales $D$ et $d$ | $\mathcal A=\dfrac{D\times d}2$ |
| Trapèze de bases $B$, $b$ et hauteur $h$ | $\mathcal A=\dfrac{(B+b)\times h}2$ |
| Disque de rayon $r$ | $\mathcal A=\pi r^2$ |
:::

```figure
{"type":"geometry","x":[-0.5,13],"y":[-0.6,4.2],"width":360,
 "polygons":[{"points":[[0,0],[5,0],[3.5,3.5]],"color":"brand"},{"points":[[7,0],[12.5,0],[11,3.2],[8,3.2]],"color":"saffron"}],
 "segments":[{"from":[3.5,3.5],"to":[3.5,0],"dashed":true},{"from":[8,3.2],"to":[8,0],"dashed":true}],
 "rightAngles":[{"at":[3.5,0],"u":[1,0],"v":[0,1]},{"at":[8,0],"u":[1,0],"v":[0,1]}],
 "points":[{"x":3.8,"y":1.6,"label":"h","dot":false},{"x":8.3,"y":1.6,"label":"h","dot":false},{"x":2.5,"y":-0.4,"label":"b","dot":false},{"x":9.75,"y":-0.4,"label":"B","dot":false},{"x":9.5,"y":3.55,"label":"b","dot":false}],
 "caption":"Hauteurs d’un triangle et d’un trapèze."}
```

:::regle Unités d’aire
Unités, de la plus grande à la plus petite : $\text{km}^2$, $\text{hm}^2$, $\text{dam}^2$, $\text{m}^2$, $\text{dm}^2$, $\text{cm}^2$, $\text{mm}^2$.
On passe d’une unité d’aire à l’unité immédiatement inférieure en multipliant par $100$ : $1\ \text{m}^2=100\ \text{dm}^2=10\,000\ \text{cm}^2$.

Unités agraires : $1$ ha $=1\ \text{hm}^2=10\,000\ \text{m}^2$ ; $1$ a $=1\ \text{dam}^2=100\ \text{m}^2$.
:::

# III. Figures composées

:::methode
Pour calculer l’aire d’une figure complexe, on la **décompose** en figures usuelles, puis on **additionne** (ou on **soustrait**) leurs aires.
:::

:::exemple
Une figure est formée d’un rectangle de $6$ cm sur $4$ cm surmonté d’un demi-disque de diamètre $4$ cm (sur un petit côté). Avec $\pi\approx3{,}14$ :
- aire du rectangle : $6\times4=24\ \text{cm}^2$ ;
- aire du demi-disque : $\dfrac{3{,}14\times2^2}2=6{,}28\ \text{cm}^2$ ;
- aire totale : $30{,}28\ \text{cm}^2$.

Son périmètre : $6+4+6+\dfrac{2\times3{,}14\times2}2=16+6{,}28=22{,}28$ cm.
:::

# Exercices

:::exercice Périmètres
Calculer le périmètre :
1. d’un carré de côté $7{,}5$ cm ;
2. d’un rectangle de $12$ m sur $8{,}5$ m ;
3. d’un triangle équilatéral de côté $4{,}2$ cm ;
4. d’un cercle de rayon $6$ cm ($\pi\approx3{,}14$).
:::

:::exercice Aires
Calculer l’aire :
1. d’un triangle de base $9$ cm et de hauteur $4$ cm ;
2. d’un losange de diagonales $10$ cm et $7$ cm ;
3. d’un trapèze de bases $8$ cm et $5$ cm et de hauteur $4$ cm ;
4. d’un parallélogramme de base $6{,}5$ cm et de hauteur $3$ cm.
:::

:::exercice Conversions
1. Convertir : $3{,}5$ m en cm ; $420$ mm en dm ; $2{,}7$ km en m.
2. Convertir : $5\ \text{m}^2$ en $\text{cm}^2$ ; $3\,500\ \text{cm}^2$ en $\text{dm}^2$ ; $2{,}5$ ha en $\text{m}^2$.
:::

:::exercice Figure composée
Un terrain a la forme d’un rectangle de $30$ m sur $20$ m dans lequel on a creusé un bassin circulaire de rayon $5$ m. On prend $\pi\approx3{,}14$.
1. Calculer l’aire du terrain sans le bassin.
2. On veut clôturer le bassin. Quelle longueur de grillage faut-il ?
:::

:::exercice Triangle rectangle
Un triangle $ABC$ est rectangle en $A$ avec $AB=6$ cm, $AC=8$ cm et $BC=10$ cm.
1. Calculer son périmètre et son aire.
2. En déduire la longueur de la hauteur issue de $A$.
:::

# Corrigés

:::corrige
1. $30$ cm. 2. $2\times20{,}5=41$ m. 3. $12{,}6$ cm. 4. $2\times3{,}14\times6=37{,}68$ cm.
:::

:::corrige
1. $\dfrac{9\times4}2=18\ \text{cm}^2$. 2. $\dfrac{10\times7}2=35\ \text{cm}^2$. 3. $\dfrac{13\times4}2=26\ \text{cm}^2$. 4. $19{,}5\ \text{cm}^2$.
:::

:::corrige
1. $350$ cm ; $4{,}2$ dm ; $2\,700$ m.
2. $50\,000\ \text{cm}^2$ ; $35\ \text{dm}^2$ ; $25\,000\ \text{m}^2$.
:::

:::corrige
1. $30\times20-3{,}14\times5^2=600-78{,}5=521{,}5\ \text{m}^2$.
2. $2\times3{,}14\times5=31{,}4$ m.
:::

:::corrige
1. $P=6+8+10=24$ cm ; $\mathcal A=\dfrac{6\times8}2=24\ \text{cm}^2$.
2. En prenant $[BC]$ comme base : $\dfrac{10\times h}2=24$, donc $h=4{,}8$ cm.
:::
