---
id: 1ac-cercle
titre: Le cercle
niveau: 1ac
semestre: 2
duree: 6 heures
---

## Objectifs
- Connaître le vocabulaire du cercle : centre, rayon, diamètre, corde, arc, disque.
- Connaître les positions d’un point par rapport à un cercle.
- Connaître la tangente à un cercle et la construire.
- Calculer le périmètre d’un cercle et l’aire d’un disque.

## Prérequis
- Droites perpendiculaires ; distance d’un point à une droite.
- Médiatrice d’un segment.

# I. Le cercle

:::definition
Soit $O$ un point et $r$ un nombre positif. Le **cercle** de centre $O$ et de rayon $r$ est l’ensemble des points $M$ du plan tels que $OM=r$. On le note $\mathcal C(O;r)$.
:::

:::vocabulaire
- Un **rayon** est un segment qui joint le centre à un point du cercle ; sa longueur est aussi appelée rayon.
- Une **corde** est un segment qui joint deux points du cercle.
- Un **diamètre** est une corde qui passe par le centre ; sa longueur est $d=2r$.
- Un **arc** est une portion de cercle comprise entre deux points.
- Le **disque** de centre $O$ et de rayon $r$ est l’ensemble des points $M$ tels que $OM\le r$.
:::

```figure
{"type":"geometry","x":[-3.5,3.5],"y":[-3.3,3.3],"width":280,"orthonormal":true,
 "circles":[{"c":[0,0],"r":3,"color":"brand"}],
 "segments":[{"from":[-3,0],"to":[3,0]},{"from":[0,0],"to":[1.8,2.4]},{"from":[-2.4,-1.8],"to":[1.2,-2.75]}],
 "points":[{"x":0,"y":0,"label":"O"},{"x":-3,"y":0,"label":"A"},{"x":3,"y":0,"label":"B"},{"x":1.8,"y":2.4,"label":"M"},{"x":-2.4,"y":-1.8,"label":"E"},{"x":1.2,"y":-2.75,"label":"F"}],
 "caption":"$[AB]$ est un diamètre, $[OM]$ un rayon, $[EF]$ une corde."}
```

:::propriete Position d’un point
Soit $\mathcal C(O;r)$ un cercle et $M$ un point :
- si $OM=r$, le point $M$ est **sur** le cercle ;
- si $OM<r$, le point $M$ est **à l’intérieur** du cercle ;
- si $OM>r$, le point $M$ est **à l’extérieur** du cercle.
:::

:::propriete
Le centre d’un cercle appartient à la **médiatrice** de chacune de ses cordes.
:::

# II. Tangente à un cercle

:::definition
La **tangente** au cercle $\mathcal C(O;r)$ en un point $A$ du cercle est la droite qui passe par $A$ et qui est **perpendiculaire** au rayon $[OA]$.
:::

```figure
{"type":"geometry","x":[-3.5,6],"y":[-3.3,3.6],"width":300,"orthonormal":true,
 "circles":[{"c":[0,0],"r":2.5,"color":"brand"}],
 "segments":[{"from":[0,0],"to":[2.5,0]},{"from":[2.5,-3],"to":[2.5,3.3],"color":"saffron"}],
 "rightAngles":[{"at":[2.5,0],"u":[-1,0],"v":[0,1]}],
 "points":[{"x":0,"y":0,"label":"O"},{"x":2.5,"y":0,"label":"A"},{"x":3,"y":2.9,"label":"(T)","dot":false}],
 "caption":"$(T)$ est tangente au cercle en $A$ : $(T)\\perp(OA)$."}
```

:::propriete
- La tangente en $A$ n’a qu’**un seul point commun** avec le cercle : le point $A$.
- La distance du centre $O$ à la tangente est égale au rayon $r$.
:::

:::propriete Positions d’une droite et d’un cercle
Soit $d$ la distance du centre $O$ à une droite $(D)$ :
- si $d>r$, la droite et le cercle n’ont aucun point commun (droite **extérieure**) ;
- si $d=r$, ils ont un seul point commun (droite **tangente**) ;
- si $d<r$, ils ont deux points communs (droite **sécante**).
:::

:::methode Construire la tangente en $A$
On trace la droite $(OA)$, puis la perpendiculaire à $(OA)$ passant par $A$.
:::

# III. Périmètre du cercle et aire du disque

:::propriete
Pour un cercle de rayon $r$ (et de diamètre $d=2r$) :
$$\text{Périmètre}:\ P=2\pi r=\pi d\qquad\text{Aire du disque}:\ \mathcal A=\pi r^2.$$
Le nombre $\pi$ vaut environ $3{,}14$.
:::

:::exemple
Pour $r=5$ cm : $P=2\times3{,}14\times5=31{,}4$ cm et $\mathcal A=3{,}14\times5^2=78{,}5\ \text{cm}^2$.
:::

# Exercices

:::exercice Vocabulaire
Tracer un cercle $\mathcal C$ de centre $O$ et de rayon $3$ cm.
1. Tracer un diamètre $[AB]$ et une corde $[CD]$ qui n’est pas un diamètre. Quelle est la longueur $AB$ ?
2. Placer un point $E$ tel que $OE=2$ cm et un point $F$ tel que $OF=4$ cm. Préciser leur position par rapport à $\mathcal C$.
:::

:::exercice Tangente
1. Tracer un segment $[OA]$ de longueur $6$ cm et le cercle de centre $O$ passant par $A$.
2. Construire la tangente $(T)$ au cercle en $A$.
3. Placer un point $M$ de $(T)$ distinct de $A$. Comparer $OM$ et $OA$. Le point $M$ est-il sur le cercle ?
:::

:::exercice Droite et cercle
Un cercle a pour rayon $4$ cm. Préciser la position de la droite $(D)$ par rapport au cercle lorsque la distance du centre à $(D)$ vaut : $5$ cm ; $4$ cm ; $2{,}5$ cm.
:::

:::exercice Périmètre et aire
On prend $\pi\approx3{,}14$.
1. Calculer le périmètre d’un cercle de diamètre $8$ cm et l’aire du disque correspondant.
2. Une roue de vélo a un rayon de $35$ cm. Quelle distance parcourt-elle en $100$ tours (en mètres) ?
3. Un cercle a un périmètre de $25{,}12$ cm. Calculer son rayon.
:::

# Corrigés

:::corrige
1. $AB=2\times3=6$ cm.
2. $OE=2<3$ : $E$ est à l’intérieur ; $OF=4>3$ : $F$ est à l’extérieur.
:::

:::corrige
3. Le triangle $OAM$ est rectangle en $A$, donc $OM>OA$ (l’hypoténuse est le plus grand côté). $OM$ est supérieur au rayon : $M$ est à l’extérieur du cercle.
:::

:::corrige
$5>4$ : droite extérieure ; $4=4$ : droite tangente ; $2{,}5<4$ : droite sécante.
:::

:::corrige
1. $P=3{,}14\times8=25{,}12$ cm ; $r=4$ cm, $\mathcal A=3{,}14\times16=50{,}24\ \text{cm}^2$.
2. Un tour : $2\times3{,}14\times35=219{,}8$ cm ; $100$ tours : $21\,980$ cm $=219{,}8$ m.
3. $2\pi r=25{,}12$ donc $r=\dfrac{25{,}12}{6{,}28}=4$ cm.
:::
