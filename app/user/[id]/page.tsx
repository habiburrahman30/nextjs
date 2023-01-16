import { use } from "react";
import { getUserById } from "../../services/user_service";

export default (req) => {
    // console.log(req);
    // console.log(req.params);
    // console.log(req.searchParams);
    const user = use(getUserById(req.params['id']));
    return <div>
        <h2>Single user ID is: {req.params.id}</h2>

        <ul>
            <li>
                <h3>Name: {user.name}</h3>
            </li>
            <li>Email: {user.email}</li>
        </ul>
    </div>
}