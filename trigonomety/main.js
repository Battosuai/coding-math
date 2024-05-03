window.onload = () => {
    const canvas = document.querySelector('#canvas');

    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        ctx.translate(0, height / 2);

        for (let angle = 0; angle < 2 * Math.PI; angle += 0.01) {
            const x = angle * 200;
            const y = Math.sin(angle) * 200;

            ctx.fillRect(x, y, 5, 5);
        }
    }
};
