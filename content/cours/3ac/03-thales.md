---
id: 3ac-thales
titre: Le théorème de Thalès
niveau: 3ac
semestre: 1
duree: 12 heures
---

## Objectifs
- Connaître et utiliser la proportionnalité des longueurs dans deux triangles déterminés par deux droites parallèles coupant deux droites sécantes.
- Calculer des longueurs à l’aide du théorème de Thalès.
- Connaître et utiliser la réciproque du théorème de Thalès pour démontrer que deux droites sont parallèles.

## Prérequis
- Proportionnalité et produit en croix.
- Droite des milieux dans un triangle.
- Angles alternes-internes, correspondants et opposés par le sommet.

# I. Le théorème de Thalès

:::theoreme Théorème de Thalès (direct)
Soient $(d_1)$ et $(d_2)$ deux droites sécantes en un point $A$. Soient $B$ et $M$ deux points de $(d_1)$ distincts de $A$, et $C$ et $N$ deux points de $(d_2)$ distincts de $A$.

Si les droites $(MN)$ et $(BC)$ sont **parallèles**, alors :
$$\frac{AM}{AB}=\frac{AN}{AC}=\frac{MN}{BC}.$$
:::

Les longueurs des côtés du triangle $AMN$ sont **proportionnelles** aux longueurs des côtés du triangle $ABC$. Le théorème s’applique dans les trois configurations suivantes.

```figure
{"type":"geometry","x":[-0.5,6.5],"y":[-0.5,4.6],"width":330,
 "polygons":[{"points":[[3,4],[0,0],[6,0]],"color":"brand","fill":false}],
 "segments":[{"from":[1.5,2],"to":[4.5,2],"color":"saffron"}],
 "points":[{"x":3,"y":4,"label":"A"},{"x":0,"y":0,"label":"B"},{"x":6,"y":0,"label":"C"},{"x":1.5,"y":2,"label":"M"},{"x":4.5,"y":2,"label":"N"}],
 "caption":"Cas 1 : $M\\in[AB]$ et $N\\in[AC]$."}
```

```figure
{"type":"geometry","x":[-0.5,6.5],"y":[-0.5,5.8],"width":330,
 "polygons":[{"points":[[2,2.67],[0,0],[4,0]],"color":"brand","fill":false}],
 "segments":[{"from":[2,2.67],"to":[0,5.33]},{"from":[2,2.67],"to":[4,5.33]},{"from":[0,5.33],"to":[4,5.33],"color":"saffron"}],
 "points":[{"x":2,"y":2.67,"label":"A"},{"x":0,"y":0,"label":"B"},{"x":4,"y":0,"label":"C"},{"x":4,"y":5.33,"label":"M"},{"x":0,"y":5.33,"label":"N"}],
 "caption":"Cas 2 (configuration « papillon ») : $M$ et $N$ sont sur les prolongements au-delà de $A$."}
```

:::remarque
- Dans le **cas 3**, $M$ et $N$ sont sur les demi-droites $[AB)$ et $[AC)$ au-delà de $B$ et $C$ ; les égalités restent les mêmes.
- Le théorème direct de Thalès sert à **calculer des longueurs**.
- Pour l’écrire correctement : on place au numérateur les côtés du « petit » triangle $AMN$ et au dénominateur les côtés correspondants du triangle $ABC$ (ou l’inverse, pour toutes les fractions).
:::

:::methode Rédiger un calcul de longueur
1. Citer les données : les points alignés et les droites parallèles.
2. Écrire « D’après le théorème de Thalès » et l’égalité des trois rapports.
3. Remplacer par les longueurs connues et utiliser le produit en croix.
:::

:::exemple
Les droites $(d_1)$ et $(d_2)$ sont sécantes en $A$, avec $M\in(AB)$, $N\in(AC)$ et $(MN)\parallel(BC)$. On donne $AM=20$, $AN=25$, $AC=45$ et $BC=27$. Calculer $AB$ et $MN$.

Dans le triangle $ABC$, $M\in(AB)$, $N\in(AC)$ et $(MN)\parallel(BC)$. D’après le théorème de Thalès :
$$\frac{AM}{AB}=\frac{AN}{AC}=\frac{MN}{BC},\quad\text{soit}\quad\frac{20}{AB}=\frac{25}{45}=\frac{MN}{27}.$$
- $AB=\dfrac{20\times45}{25}=36$.
- $MN=\dfrac{25\times27}{45}=15$.
:::

:::remarque Cas particulier : la droite des milieux
Si $M$ est le milieu de $[AB]$ et $(MN)\parallel(BC)$, alors $\dfrac{AN}{AC}=\dfrac{AM}{AB}=\dfrac12$ : $N$ est le milieu de $[AC]$ et $MN=\dfrac{BC}2$. On retrouve les propriétés de la droite des milieux vues en 2AC.
:::

# II. Réciproque du théorème de Thalès

:::theoreme Réciproque du théorème de Thalès
Soient $(d_1)$ et $(d_2)$ deux droites sécantes en $A$. Soient $B$ et $M$ deux points de $(d_1)$ distincts de $A$, et $C$ et $N$ deux points de $(d_2)$ distincts de $A$.

Si les points $A$, $M$, $B$ et les points $A$, $N$, $C$ sont **alignés dans le même ordre**, et si
$$\frac{AM}{AB}=\frac{AN}{AC},$$
alors les droites $(MN)$ et $(BC)$ sont **parallèles**.
:::

:::remarque
- La réciproque sert à **démontrer que deux droites sont parallèles**.
- La condition « dans le même ordre » est indispensable : sans elle, l’égalité des rapports ne suffit pas.
- Si les rapports $\dfrac{AM}{AB}$ et $\dfrac{AN}{AC}$ sont **différents**, alors les droites $(MN)$ et $(BC)$ **ne sont pas parallèles** (c’est la contraposée du théorème direct).
:::

:::exemple
Les points $R$, $M$, $S$ et $R$, $T$, $P$ sont alignés dans le même ordre, avec $RM=4{,}5$, $RS=6$, $RT=6$ et $RP=8$. Les droites $(MT)$ et $(SP)$ sont-elles parallèles ?

$$\frac{RM}{RS}=\frac{4{,}5}{6}=0{,}75\qquad\text{et}\qquad\frac{RT}{RP}=\frac68=0{,}75.$$
Les rapports sont égaux et les points sont alignés dans le même ordre. D’après la réciproque du théorème de Thalès, $(MT)\parallel(SP)$.
:::

:::exemple
Avec $AM=2$, $AB=5$, $AN=3$ et $AC=8$ (points alignés dans le même ordre) : $\dfrac{AM}{AB}=0{,}4$ et $\dfrac{AN}{AC}=0{,}375$. Les rapports sont différents, donc $(MN)$ et $(BC)$ ne sont pas parallèles.
:::

# Exercices

:::exercice Compléter un raisonnement
Dans un triangle $ABC$, $M\in[AB]$ et $N\in[AC]$ avec $(MN)\parallel(BC)$, $AM=4$, $AB=12$, $AN=3$ et $BC=15$. Calculer $AC$ et $MN$.
:::

:::exercice Configuration papillon
Les droites $(AC)$ et $(BD)$ se coupent en $O$, avec $(AB)\parallel(CD)$, $OA=5$, $OB=6$, $OC=x$ et $OD=x+2$. Déterminer $x$.
:::

:::exercice Parallèles ou non ?
Les points $E$, $A$, $F$ et $E$, $B$, $G$ sont alignés dans le même ordre.
1. Avec $EA=3$, $EF=7{,}5$, $EB=4$ et $EG=10$ : les droites $(AB)$ et $(FG)$ sont-elles parallèles ?
2. Même question avec $EA=3$, $EF=7$, $EB=4$ et $EG=10$.
:::

:::exercice Hauteur d’un arbre
Pour mesurer un arbre, Salma plante verticalement un bâton de $1{,}5$ m. L’ombre du bâton mesure $2$ m et, au même moment, l’ombre de l’arbre mesure $12$ m. Les rayons du soleil sont parallèles. Calculer la hauteur de l’arbre.
:::

:::exercice Produit des longueurs
$ABC$ est un triangle. La parallèle à $(BC)$ passant par un point $M$ de $[AB]$ coupe $[AC]$ en $N$. Montrer que $AM\times AC=AN\times AB$.
:::

:::exercice Démontrer un parallélisme
Dans la figure, $AB=9$, $AC=7{,}5$, $AM=3$ et $AN=2{,}5$, avec $M\in[AB]$ et $N\in[AC]$. Montrer que $(MN)\parallel(BC)$, puis calculer $MN$ sachant que $BC=6$.
:::

:::exercice Série — configuration papillon
Les droites $(AC)$ et $(BD)$ se coupent en $O$, avec $(AB)\parallel(CD)$. On donne $OA=3$, $OC=7{,}5$, $OB=4$ et $CD=10$ (en cm).
Calculer $OD$ et $AB$.
:::

:::exercice Série — réciproque
$E$, $F$, $G$ sont alignés dans cet ordre, ainsi que $E$, $H$, $K$. On donne $EF=4$, $EG=10$, $EH=6$ et $EK=15$.
Montrer que $(FH)\parallel(GK)$.
:::

# Corrigés

:::corrige
D’après le théorème de Thalès : $\dfrac{AM}{AB}=\dfrac{AN}{AC}=\dfrac{MN}{BC}$, soit $\dfrac4{12}=\dfrac3{AC}=\dfrac{MN}{15}$.
- $AC=\dfrac{3\times12}4=9$.
- $MN=\dfrac{4\times15}{12}=5$.
:::

:::corrige
D’après le théorème de Thalès (configuration papillon) : $\dfrac{OA}{OC}=\dfrac{OB}{OD}$, soit $\dfrac5x=\dfrac6{x+2}$.

Produit en croix : $5(x+2)=6x$, donc $5x+10=6x$ et $x=10$.
:::

:::corrige
1. $\dfrac{EA}{EF}=\dfrac3{7{,}5}=0{,}4$ et $\dfrac{EB}{EG}=\dfrac4{10}=0{,}4$ : rapports égaux, points dans le même ordre ; d’après la réciproque du théorème de Thalès, $(AB)\parallel(FG)$.
2. $\dfrac{EA}{EF}=\dfrac37\approx0{,}43$ et $\dfrac{EB}{EG}=0{,}4$ : rapports différents, donc $(AB)$ et $(FG)$ ne sont pas parallèles.
:::

:::corrige
Les rayons sont parallèles : on applique le théorème de Thalès. Si $h$ est la hauteur de l’arbre :
$$\frac{h}{1{,}5}=\frac{12}{2}\quad\text{donc}\quad h=1{,}5\times6=9\ \text{m}.$$
:::

:::corrige
Comme $(MN)\parallel(BC)$, d’après le théorème de Thalès $\dfrac{AM}{AB}=\dfrac{AN}{AC}$. Le produit en croix donne $AM\times AC=AN\times AB$.
:::

:::corrige
$\dfrac{AM}{AB}=\dfrac39=\dfrac13$ et $\dfrac{AN}{AC}=\dfrac{2{,}5}{7{,}5}=\dfrac13$. Les rapports sont égaux et $A$, $M$, $B$ et $A$, $N$, $C$ sont alignés dans le même ordre, donc $(MN)\parallel(BC)$.

Puis, d’après le théorème de Thalès : $\dfrac{MN}{BC}=\dfrac13$, donc $MN=\dfrac63=2$.
:::

:::corrige
D’après le théorème de Thalès : $\dfrac{OA}{OC}=\dfrac{OB}{OD}=\dfrac{AB}{CD}$, soit $\dfrac{3}{7{,}5}=\dfrac{4}{OD}=\dfrac{AB}{10}$. Donc $OD=\dfrac{4\times7{,}5}{3}=10$ cm et $AB=\dfrac{3\times10}{7{,}5}=4$ cm.
:::

:::corrige
$\dfrac{EF}{EG}=\dfrac4{10}=0{,}4$ et $\dfrac{EH}{EK}=\dfrac6{15}=0{,}4$. Les rapports sont égaux et les points sont alignés dans le même ordre : d’après la réciproque du théorème de Thalès, $(FH)\parallel(GK)$.
:::
