{
    const sender = 'Matt';

    function sendTo(from, to) {
        console.log(`From ${from} to ${to}`);
    }

    sendTo(sender, 'Sarah'); // *From Matt to Sarah 
    sendTo(null); // ** From undefined to null
}

{
    const sender = 'Matt';

    function sendTo(to, from = 'CC') {
        console.log(`From ${from} to ${to}`);
    }

    sendTo('Max'); // *** From cc to Max
    sendTo('Ben', 'Jay'); // **** From Ben to Jay
}