import { AboutMe } from "../AboutMe";
import {technologies} from '../../data/technologies'

export const TechList = () => {
    return (
        <ul>
            {technologies.map(technologies => (
                <AboutMe key={technologies.name} technologies={technologies} />
            ))}
        </ul>
    )
}