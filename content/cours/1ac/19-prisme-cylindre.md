---
id: 1ac-prisme-cylindre
titre: Le prisme droit et le cylindre
niveau: 1ac
semestre: 2
duree: 6 heures
---

## Objectifs
- Reconnaître un prisme droit et un cylindre de révolution et connaître leur vocabulaire.
- Construire le patron d’un prisme droit et d’un cylindre.
- Calculer l’aire latérale, l’aire totale et le volume d’un prisme droit et d’un cylindre.

## Prérequis
- Aires et périmètres des figures usuelles ; périmètre du cercle et aire du disque.
- Pavé droit et cube.

# I. Le prisme droit

:::definition
Un **prisme droit** est un solide formé :
- de deux faces superposables et parallèles, appelées **bases**, qui sont des polygones ;
- de faces **latérales** qui sont des **rectangles** perpendiculaires aux bases.

La longueur commune des arêtes latérales est la **hauteur** du prisme.
:::

```figure
{"type":"geometry","x":[-0.5,7],"y":[-0.5,5.5],"width":250,
 "polygons":[{"points":[[0,0],[4,0],[5.5,1.2]],"color":"brand"},{"points":[[0,3.8],[4,3.8],[5.5,5]],"color":"brand"}],
 "segments":[{"from":[0,0],"to":[0,3.8]},{"from":[4,0],"to":[4,3.8]},{"from":[5.5,1.2],"to":[5.5,5]}],
 "points":[{"x":6.1,"y":3,"label":"h","dot":false}],
 "caption":"Un prisme droit à base triangulaire de hauteur $h$."}
```

:::exemple
Le pavé droit et le cube sont des prismes droits particuliers (bases rectangulaires ou carrées).
:::

:::methode Patron d’un prisme droit
Le patron est formé des deux bases et d’un grand rectangle (les faces latérales mises bout à bout) dont la longueur est le **périmètre de la base** et la largeur la **hauteur** du prisme.
:::

# II. Aires et volume du prisme droit

:::propriete
Pour un prisme droit de hauteur $h$, dont la base a pour périmètre $P$ et pour aire $\mathcal B$ :
$$\text{Aire latérale}:\ \mathcal A_\ell=P\times h\qquad\text{Aire totale}:\ \mathcal A_t=\mathcal A_\ell+2\mathcal B\qquad\text{Volume}:\ V=\mathcal B\times h.$$
:::

:::exemple
Prisme droit à base triangle rectangle de côtés $3$ cm, $4$ cm et $5$ cm, de hauteur $10$ cm :
- $P=3+4+5=12$ cm, $\mathcal A_\ell=12\times10=120\ \text{cm}^2$ ;
- $\mathcal B=\dfrac{3\times4}2=6\ \text{cm}^2$, $\mathcal A_t=120+12=132\ \text{cm}^2$ ;
- $V=6\times10=60\ \text{cm}^3$.
:::

:::exemple Le cube
Pour un cube d’arête $a$ : aire d’une face $a^2$, aire latérale $4a^2$, aire totale $6a^2$, volume $a^3$.
:::

# III. Le cylindre de révolution

:::definition
Un **cylindre de révolution** est un solide formé de deux **disques** superposables et parallèles (les **bases**) et d’une surface latérale courbe. La distance entre les deux bases est la **hauteur** $h$ ; le rayon des bases est le **rayon** $r$ du cylindre.
:::

:::methode Patron d’un cylindre
Le patron est formé de deux disques de rayon $r$ et d’un **rectangle** de longueur $2\pi r$ (le périmètre de la base) et de largeur $h$.
:::

```figure
{"type":"geometry","x":[-0.5,10],"y":[-2.6,5.4],"width":320,
 "polygons":[{"points":[[2.5,0],[9.5,0],[9.5,3],[2.5,3]],"color":"saffron"}],
 "circles":[{"c":[4,4.2],"r":1.1,"color":"brand"},{"c":[4,-1.2],"r":1.1,"color":"brand"}],
 "points":[{"x":6,"y":-0.4,"label":"2πr","dot":false},{"x":9.9,"y":1.5,"label":"h","dot":false}],
 "caption":"Patron d’un cylindre : deux disques et un rectangle de longueur $2\\pi r$."}
```

:::propriete
Pour un cylindre de rayon $r$ et de hauteur $h$ :
$$\mathcal A_\ell=2\pi r\times h\qquad\mathcal A_t=2\pi rh+2\pi r^2\qquad V=\pi r^2\times h.$$
:::

:::exemple
Cylindre de rayon $3$ cm et de hauteur $8$ cm ($\pi\approx3{,}14$) :
- $\mathcal A_\ell=2\times3{,}14\times3\times8=150{,}72\ \text{cm}^2$ ;
- $V=3{,}14\times9\times8=226{,}08\ \text{cm}^3$.
:::

:::regle Unités de volume
$1\ \text{m}^3=1\,000\ \text{dm}^3$ ; $1\ \text{dm}^3=1\,000\ \text{cm}^3$ ; $1\ \text{dm}^3=1$ L.
:::

# Exercices

:::exercice Vocabulaire
Un prisme droit a pour base un pentagone.
1. Combien a-t-il de faces latérales ? de faces en tout ?
2. Combien a-t-il d’arêtes et de sommets ?
:::

:::exercice Prisme droit
Un prisme droit a pour base un rectangle de $5$ cm sur $3$ cm et pour hauteur $7$ cm.
1. Calculer l’aire latérale de deux façons différentes.
2. Calculer l’aire totale et le volume.
:::

:::exercice Prisme à base triangulaire
Un prisme droit a pour hauteur $12$ cm et pour base un triangle rectangle dont les côtés de l’angle droit mesurent $6$ cm et $8$ cm (hypoténuse $10$ cm).
1. Dessiner un patron à l’échelle $\dfrac12$.
2. Calculer l’aire latérale, l’aire totale et le volume.
:::

:::exercice Cylindre
On prend $\pi\approx3{,}14$. Une boîte de conserve cylindrique a un diamètre de $8$ cm et une hauteur de $11$ cm.
1. Calculer l’aire de l’étiquette qui recouvre la surface latérale.
2. Calculer le volume de la boîte, en $\text{cm}^3$ puis en litres.
:::

:::exercice Problème
Un réservoir cylindrique a un rayon de $1$ m et une hauteur de $2$ m. On prend $\pi\approx3{,}14$.
1. Calculer son volume en $\text{m}^3$, puis en litres.
2. On le remplit avec un robinet de débit $20$ L par minute. Combien de temps faut-il pour le remplir ?
:::

:::exercice Approfondissement — remplir un aquarium
Un aquarium a la forme d’un pavé droit de $60$ cm sur $30$ cm et de hauteur $40$ cm. On le remplit avec une carafe cylindrique de rayon $5$ cm et de hauteur $20$ cm ($\pi\approx3{,}14$).
1. Calculer le volume de l’aquarium en litres.
2. Calculer le volume de la carafe en litres.
3. Combien de carafes pleines faut-il pour remplir l’aquarium aux trois quarts ?
:::

:::exercice Approfondissement — doubler les dimensions
Un cylindre a pour rayon $r$ et pour hauteur $h$.
1. Comment varie son volume si l’on double sa hauteur ?
2. si l’on double son rayon ?
3. si l’on double les deux ?
:::

# Corrigés

:::corrige
1. $5$ faces latérales ; $7$ faces en tout.
2. $15$ arêtes ($5+5+5$) et $10$ sommets.
:::

:::corrige
1. Somme des faces : $2\times(5\times7)+2\times(3\times7)=70+42=112\ \text{cm}^2$ ; ou $P\times h=16\times7=112\ \text{cm}^2$.
2. $\mathcal A_t=112+2\times15=142\ \text{cm}^2$ ; $V=15\times7=105\ \text{cm}^3$.
:::

:::corrige
2. $P=24$ cm : $\mathcal A_\ell=24\times12=288\ \text{cm}^2$ ; $\mathcal B=\dfrac{6\times8}2=24\ \text{cm}^2$ ; $\mathcal A_t=288+48=336\ \text{cm}^2$ ; $V=24\times12=288\ \text{cm}^3$.
:::

:::corrige
1. $r=4$ cm : $\mathcal A_\ell=2\times3{,}14\times4\times11=276{,}32\ \text{cm}^2$.
2. $V=3{,}14\times16\times11=552{,}64\ \text{cm}^3\approx0{,}55$ L.
:::

:::corrige
1. $V=3{,}14\times1^2\times2=6{,}28\ \text{m}^3=6\,280$ L.
2. $6\,280\div20=314$ min, soit $5$ h $14$ min.
:::

:::corrige
1. $60\times30\times40=72\,000\ \text{cm}^3=72$ L.
2. $3{,}14\times25\times20=1\,570\ \text{cm}^3=1{,}57$ L.
3. $\dfrac34\times72=54$ L ; $54\div1{,}57\approx34{,}4$ : il faut $35$ carafes (la dernière n’étant pas vidée entièrement).
:::

:::corrige
1. $\pi r^2(2h)=2\pi r^2h$ : le volume double.
2. $\pi(2r)^2h=4\pi r^2h$ : il est multiplié par $4$.
3. $\pi(2r)^2(2h)=8\pi r^2h$ : il est multiplié par $8$.
:::
