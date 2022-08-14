import React from 'react';
import Link from "next/link";
import clsx from 'clsx';

import { getSeasons } from "../lib/episodes";

import style from './SeasonsNav.module.css'

export default function SeasonsNav ({seasons, active}) {
    return !seasons?.length ? null : (
        <ul className={style.list}>
            { seasons.map(s => (
                <li className={clsx(style.item, { [style.active]: s.number === active})} key={s.number}>
                    <Link href={`/s/${s.number}`}><a>{s.number}</a></Link>
                </li>
            ))}
        </ul>
    );
}
