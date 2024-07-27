import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const { nickname } = useParams();

    return (
        <div>
            <h1>Profile Page</h1>
            <p>Nickname: {nickname}</p>
            {/* Thực hiện các tác vụ khác với nickname */}
        </div>
    );
};

export default Profile;
