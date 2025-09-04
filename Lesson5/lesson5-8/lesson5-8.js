let foobar = (array) => {
    document.write(`<ul>`);
    for (const item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
};
foobar([122, 576, 459, 578, 12, 567, `lorem`])