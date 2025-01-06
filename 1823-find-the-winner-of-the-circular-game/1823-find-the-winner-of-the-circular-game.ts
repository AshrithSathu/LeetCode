function findTheWinner(n: number, k: number): number {
    let arr = Array.from({ length: n }, (_, i) => i + 1);
    let index = 0;

    while (arr.length > 1) {
        index = (index + k - 1) % arr.length;
        arr.splice(index, 1);
    }
    return arr[0];
}