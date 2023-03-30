import { IPeopleDataSingle } from "@/interfaces/people.interface";
import Link from "next/link";
import { FC } from "react";
import styles from "./PeopleItem.module.scss"

const PeopleItem: FC<IPeopleDataSingle> = ({ people }) => {
    return (
        <div className={styles.item}>
            <h2>{people.name}</h2>

            <Link href={`/people/${people.id}`}>
                Read more
            </Link>
        </div>
    )
}

export default PeopleItem