import React from 'react';

import cn from './styles.module.scss';

const PlatformsLIst = ({ platforms, reddit, website }) => {
    const renderPlatforms =
        platforms &&
        platforms.map((item) => (
            <li key={item.platform.id} className={cn['platforms__item']}>
                {item.platform.name}
            </li>
        ));

    return (
        <div className={cn['platforms-box']}>
            {(reddit || website) && (
                <div className={cn.links}>
                    <h2>Wed Sites</h2>

                    {reddit && (
                        <a
                            href={reddit}
                            title={reddit}
                            target="_blank"
                            tabIndex="0"
                            rel="noreferrer"
                        >
                            Reddit
                        </a>
                    )}

                    {website && (
                        <a
                            href={website}
                            title={website}
                            target="_blank"
                            tabIndex="0"
                            rel="noreferrer"
                        >
                            Game website
                        </a>
                    )}
                </div>
            )}
            <div className={cn.platforms}>
                <p className={cn['platforms-title']}>Platforms</p>

                <ul className={cn['platforms-list']}>{renderPlatforms}</ul>
            </div>
        </div>
    );
};

export default PlatformsLIst;
