import React from 'react';

const EmailReader = (props) => {
    console.log(props);

    const handleTrashClick = (ev) => {
        console.log('Me han clickado', props.username);
        props.deleteEmail('123');
    };

    const renderButtons = () => {
        return (
            <div className="mt-1">
                {props.username}
                <button className="form__btn">
                    <span className="fas fa-reply"></span>
                    Responder
                </button>

                <button className="form__btn">
                    <span className="fas fa-reply-all"></span>
                    Responder a todos
                </button>

                <button className="form__btn">
                    <span className="fas fa-share"></span>
                    Reenviar a todos
                </button>
            </div>
        );
    };

    return (
        <div>
            <div className="col2 mt-1 pt-1">
                <div>
                    <h2 className="title--meidum">Entradas ya a la venta</h2>
                    <h3 className="title--small">
                        <span className="text--bold display-inline-block mr-1">
                            Front Fest
                        </span>
                        <span className="text-normal display-inline-block">
                            &lt;info@frontfest.org&gt;
                        </span>
                    </h3>
                </div>
                <div className="text-align-right">
                    <button className="fas fa-times-circle form__btn"></button>
                    <button
                        className="fas fa-trash form__btn"
                        onClick={handleTrashClick}
                    ></button>
                </div>
            </div>

            <p>
                FrontFest es un evento anual y sin ánimo de lucro. Está
                organizado y gestionado por un equipo de voluntarios y
                voluntarias que pertenecen a la comunidad de desarrollo
                frontend. Celebrado por primera vez en 2017, pretende ser un
                punto de encuentro a nivel nacional, principalmente en
                castellano, para todas aquellas personas interesadas en las
                tecnologías de frontend, donde compartir experiencias y aprender
                acerca de las nuevas tendencias en el sector. Y por supuesto,
                acabar divirtiéndose en buena compañía.
            </p>
            {renderButtons()}
        </div>
    );
};

export default EmailReader;
