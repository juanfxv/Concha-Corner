function Rating({ rating, setRating }) {
    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className='star'
                    style={{
                        cursor: setRating ? 'pointer' : 'default',
                        color: rating >= star ? 'gold' : 'gray',
                        fontSize: '35px',
                    }}
                    onClick={() => {
                        setRating && setRating(star);
                    }}
                >
                    ★
                </span>
            ))}
        </div>
    );
}

export default Rating;
