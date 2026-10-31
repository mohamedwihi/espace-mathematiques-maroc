---
id: 1bac-produit-scalaire
titre: Produit scalaire dans le plan
niveau: 1bac
semestre: 1
duree: 14 heures
---

## Objectifs
- Calculer un produit scalaire par projection, par la forme trigonométrique ou analytiquement.
- Utiliser les théorèmes d’Al-Kashi et de la médiane.
- Calculer une norme, une distance, la distance d’un point à une droite.
- Utiliser un vecteur normal pour écrire l’équation d’une droite.
- Déterminer l’équation d’un cercle ; étudier la position relative d’une droite et d’un cercle.

## Prérequis
- Produit scalaire (tronc commun).
- Repère orthonormé, équations de droites.
- Trigonométrie.

# I. Définition et rappels

:::definition
Soient $\vec u=\overrightarrow{AB}$ et $\vec v=\overrightarrow{AC}$ deux vecteurs non nuls et $H$ le projeté orthogonal de $C$ sur $(AB)$ :
$$\vec u\cdot\vec v=\overline{AB}\times\overline{AH}=\|\vec u\|\times\|\vec v\|\times\cos\left(\widehat{\vec u,\vec v}\right),$$
où $\overline{AB}\times\overline{AH}$ vaut $AB\times AH$ si $\overrightarrow{AB}$ et $\overrightarrow{AH}$ ont le même sens, et $-AB\times AH$ sinon. Si l’un des vecteurs est nul, $\vec u\cdot\vec v=0$.
:::

:::propriete
- $\vec u\cdot\vec v=\vec v\cdot\vec u$ ; $\vec u\cdot(\vec v+\vec w)=\vec u\cdot\vec v+\vec u\cdot\vec w$ ; $(k\vec u)\cdot\vec v=k(\vec u\cdot\vec v)$.
- $\vec u^{\,2}=\|\vec u\|^2$ ; $(\vec u\pm\vec v)^2=\|\vec u\|^2\pm2\vec u\cdot\vec v+\|\vec v\|^2$.
- $\vec u\perp\vec v\iff\vec u\cdot\vec v=0$.
:::

# II. Théorèmes dans le triangle

:::theoreme Théorème d’Al-Kashi
Dans un triangle $ABC$ : $BC^2=AB^2+AC^2-2AB\times AC\times\cos\hat A$.
:::

:::theoreme Théorème de la médiane
Si $I$ est le milieu de $[BC]$ : $AB^2+AC^2=2AI^2+\dfrac{BC^2}2$ et $\overrightarrow{AB}\cdot\overrightarrow{AC}=AI^2-\dfrac{BC^2}4$.
:::

:::demonstration Théorème de la médiane
$AB^2+AC^2=\left(\overrightarrow{AI}+\overrightarrow{IB}\right)^2+\left(\overrightarrow{AI}+\overrightarrow{IC}\right)^2=2AI^2+2\overrightarrow{AI}\cdot\left(\overrightarrow{IB}+\overrightarrow{IC}\right)+IB^2+IC^2$. Or $\overrightarrow{IB}+\overrightarrow{IC}=\vec0$ et $IB=IC=\dfrac{BC}2$, d’où le résultat.
:::

:::exemple
$ABC$ avec $AB=6$, $AC=4$, $BC=8$ et $I$ milieu de $[BC]$ : $AI^2=\dfrac{36+16}{2}-\dfrac{64}{4}=26-16=10$, donc $AI=\sqrt{10}$.
:::

# III. Expression analytique

On munit le plan d’un repère **orthonormé** $(O,\vec i,\vec j)$.

:::propriete
Si $\vec u(x;y)$ et $\vec v(x';y')$ :
$$\vec u\cdot\vec v=xx'+yy'\qquad\|\vec u\|=\sqrt{x^2+y^2}\qquad\cos\left(\widehat{\vec u,\vec v}\right)=\frac{xx'+yy'}{\sqrt{x^2+y^2}\sqrt{x'^2+y'^2}}.$$
Pour deux points : $AB=\sqrt{\left(x_B-x_A\right)^2+\left(y_B-y_A\right)^2}$.
:::

:::exemple
$\vec u(2;1)$ et $\vec v(-1;3)$ : $\vec u\cdot\vec v=-2+3=1$, $\|\vec u\|=\sqrt5$, $\|\vec v\|=\sqrt{10}$ et $\cos\theta=\dfrac1{\sqrt{50}}=\dfrac{\sqrt2}{10}$.
:::

# IV. Droites et produit scalaire

:::definition
Un vecteur **normal** à une droite $(D)$ est un vecteur non nul orthogonal à un vecteur directeur de $(D)$.
:::

:::propriete
- La droite d’équation $ax+by+c=0$ admet $\vec n(a;b)$ comme vecteur normal (et $\vec u(-b;a)$ comme vecteur directeur).
- La droite passant par $A$ et de vecteur normal $\vec n$ est l’ensemble des points $M$ tels que $\overrightarrow{AM}\cdot\vec n=0$.
- Deux droites sont **perpendiculaires** si et seulement si leurs vecteurs normaux sont orthogonaux : $aa'+bb'=0$.
:::

:::exemple
La droite passant par $A(1;-2)$ et de vecteur normal $\vec n(3;4)$ : $3(x-1)+4(y+2)=0$, soit $3x+4y+5=0$.
:::

:::propriete Distance d’un point à une droite
La distance du point $A(x_0;y_0)$ à la droite $(D):ax+by+c=0$ est
$$d\left(A,(D)\right)=\frac{\left|ax_0+by_0+c\right|}{\sqrt{a^2+b^2}}.$$
:::

:::exemple
$d\left(O,(D)\right)$ avec $(D):3x+4y+5=0$ : $\dfrac{|5|}{5}=1$.
:::

# V. Le cercle

:::propriete Équation d’un cercle
Le cercle $(\mathcal C)$ de centre $\Omega(a;b)$ et de rayon $r$ a pour équation
$$(x-a)^2+(y-b)^2=r^2,$$
qui se développe en $x^2+y^2-2ax-2by+c=0$ avec $c=a^2+b^2-r^2$.
:::

:::propriete Ensemble $x^2+y^2-2ax-2by+c=0$
Cette équation s’écrit $(x-a)^2+(y-b)^2=a^2+b^2-c$. Soit $k=a^2+b^2-c$ :
- si $k>0$, c’est le cercle de centre $\Omega(a;b)$ et de rayon $\sqrt k$ ;
- si $k=0$, c’est le point $\Omega$ ;
- si $k<0$, c’est l’ensemble vide.
:::

:::propriete Cercle de diamètre $[AB]$
$M$ appartient au cercle de diamètre $[AB]$ si et seulement si $\overrightarrow{MA}\cdot\overrightarrow{MB}=0$.
:::

:::propriete Position relative d’une droite et d’un cercle
Soit $(\mathcal C)$ de centre $\Omega$ et de rayon $r$, $(D)$ une droite et $d=d\left(\Omega,(D)\right)$ :
- $d>r$ : $(D)$ et $(\mathcal C)$ n’ont aucun point commun ;
- $d=r$ : $(D)$ est **tangente** à $(\mathcal C)$ (un seul point commun) ;
- $d<r$ : $(D)$ coupe $(\mathcal C)$ en deux points.

La tangente à $(\mathcal C)$ en un point $T$ est la droite passant par $T$ et de vecteur normal $\overrightarrow{\Omega T}$.
:::

:::exemple
$(\mathcal C):x^2+y^2-2x-4y-4=0$ s’écrit $(x-1)^2+(y-2)^2=9$ : centre $\Omega(1;2)$, rayon $3$. La tangente en $T(4;2)$ a pour vecteur normal $\overrightarrow{\Omega T}(3;0)$ : $3(x-4)=0$, soit $x=4$.
:::

```figure
{"type":"graph","x":[-3,6],"y":[-2,6],"width":330,"orthonormal":true,
 "circles":[{"c":[1,2],"r":3}],
 "segments":[{"from":[4,-2],"to":[4,6],"color":"brand"}],
 "points":[{"x":1,"y":2,"label":"Ω(1;2)"},{"x":4,"y":2,"label":"T(4;2)"}],
 "caption":"Le cercle $(x-1)^2+(y-2)^2=9$ et sa tangente $x=4$ au point $T$."}
```

# Exercices

:::exercice Calculs
Dans un repère orthonormé, $A(1;1)$, $B(5;3)$ et $C(2;4)$. Calculer $\overrightarrow{AB}\cdot\overrightarrow{AC}$, $AB$, $AC$, puis $\cos\widehat{BAC}$.
:::

:::exercice Al-Kashi et médiane
Un triangle $ABC$ vérifie $AB=5$, $AC=7$ et $\hat A=120^\circ$. Calculer $BC$, puis la longueur de la médiane issue de $A$.
:::

:::exercice Vecteur normal
1. Écrire une équation de la droite passant par $A(2;-1)$ et perpendiculaire à $\vec n(1;-3)$.
2. Écrire une équation de la hauteur issue de $C(0;4)$ dans le triangle $ABC$ avec $A(2;-1)$ et $B(5;0)$.
:::

:::exercice Cercle
1. Déterminer le centre et le rayon de $(\mathcal C):x^2+y^2+4x-6y-3=0$.
2. Étudier la position relative de $(\mathcal C)$ et de la droite $(D):x-y+1=0$.
3. Écrire une équation du cercle de diamètre $[AB]$ avec $A(1;2)$ et $B(3;-4)$.
:::

:::exercice Distance
Calculer la distance du point $M(3;-2)$ à la droite $(D):2x-y+2=0$, puis l’équation du cercle de centre $M$ tangent à $(D)$.
:::

:::exercice Série — cercle
Déterminer le centre et le rayon du cercle $(\mathcal C):x^2+y^2-4x+6y-3=0$, puis une équation de la tangente à $(\mathcal C)$ au point $A(6;-3)$.
:::

:::exercice Série — distance et position
On donne la droite $(D):3x-4y+5=0$ et le cercle $(\mathcal C)$ de centre $\Omega(2;-1)$ et de rayon $3$.
1. Calculer la distance de $\Omega$ à $(D)$.
2. En déduire la position de $(D)$ par rapport à $(\mathcal C)$.
:::

:::exercice Approfondissement — cercle passant par trois points
Déterminer l’équation du cercle passant par $A(1;0)$, $B(5;0)$ et $C(3;4)$, puis son centre et son rayon.
:::

:::exercice Approfondissement — tangentes issues d’un point
$(\mathcal C):x^2+y^2=5$. Déterminer les équations des tangentes à $(\mathcal C)$ passant par $P(3;1)$ (chercher les droites $y-1=m(x-3)$ à distance $\sqrt5$ de $O$).
:::

# Corrigés

:::corrige
$\overrightarrow{AB}(4;2)$, $\overrightarrow{AC}(1;3)$ : $\overrightarrow{AB}\cdot\overrightarrow{AC}=4+6=10$ ; $AB=\sqrt{20}=2\sqrt5$, $AC=\sqrt{10}$ ; $\cos\widehat{BAC}=\dfrac{10}{2\sqrt5\times\sqrt{10}}=\dfrac{10}{10\sqrt2}=\dfrac{\sqrt2}2$, donc $\widehat{BAC}=45^\circ$.
:::

:::corrige
$BC^2=25+49-2\times5\times7\times\left(-\dfrac12\right)=109$, $BC=\sqrt{109}$. Médiane : $AI^2=\dfrac{AB^2+AC^2}2-\dfrac{BC^2}4=37-\dfrac{109}4=\dfrac{39}4$, donc $AI=\dfrac{\sqrt{39}}2$.
:::

:::corrige
1. $(x-2)-3(y+1)=0$, soit $x-3y-5=0$.
2. La hauteur passe par $C$ et a pour vecteur normal $\overrightarrow{AB}(3;1)$ : $3x+(y-4)=0$, soit $3x+y-4=0$.
:::

:::corrige
1. $(x+2)^2+(y-3)^2=4+9+3=16$ : centre $\Omega(-2;3)$, rayon $4$.
2. $d=\dfrac{|-2-3+1|}{\sqrt2}=\dfrac4{\sqrt2}=2\sqrt2\approx2{,}83<4$ : la droite coupe le cercle en deux points.
3. $\overrightarrow{MA}\cdot\overrightarrow{MB}=0$ : $(1-x)(3-x)+(2-y)(-4-y)=0$, soit $x^2+y^2-4x+2y-5=0$ (centre $(2;-1)$, rayon $\sqrt{10}$).
:::

:::corrige
$d=\dfrac{|6+2+2|}{\sqrt5}=\dfrac{10}{\sqrt5}=2\sqrt5$. Le cercle cherché a pour rayon $2\sqrt5$ : $(x-3)^2+(y+2)^2=20$.
:::

:::corrige
$(x-2)^2+(y+3)^2=16$ : centre $\Omega(2;-3)$, rayon $4$. $A\in(\mathcal C)$ car $16+0=16$. La tangente en $A$ est perpendiculaire à $\overrightarrow{\Omega A}(4;0)$ : c’est la droite $x=6$.
:::

:::corrige
1. $d=\dfrac{\lvert6+4+5\rvert}{\sqrt{9+16}}=\dfrac{15}{5}=3$.
2. $d=r$ : la droite est tangente au cercle.
:::

:::corrige
$(\mathcal C):x^2+y^2+ax+by+c=0$. Avec $A$ : $1+a+c=0$ ; $B$ : $25+5a+c=0$ ; d’où $a=-6$, $c=5$. Avec $C$ : $9+16-18+4b+5=0$, $b=-3$. $(\mathcal C):x^2+y^2-6x-3y+5=0$, soit $(x-3)^2+\left(y-\dfrac32\right)^2=\dfrac{25}4$ : centre $\left(3;\dfrac32\right)$, rayon $\dfrac52$.
:::

:::corrige
$mx-y+1-3m=0$ ; distance à $O$ : $\dfrac{\lvert1-3m\rvert}{\sqrt{m^2+1}}=\sqrt5\iff(1-3m)^2=5(m^2+1)\iff4m^2-6m-4=0\iff2m^2-3m-2=0$ : $m=2$ ou $m=-\dfrac12$. Tangentes : $y=2x-5$ et $y=-\dfrac12x+\dfrac52$.
:::
