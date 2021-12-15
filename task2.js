const styles = ["Джаз", "Блюз"];

styles[styles.length] = "Рок-н-Ролл";

styles[styles.length - 2] = "Класика";

console.log(styles.shift());

styles.unshift("Реп");
styles.unshift ("Реггі");


