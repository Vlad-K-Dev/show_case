import React, {useState} from "react";
import {useForm} from "react-hook-form"

function Search(){
    const [value, setValue] = useState({});
    const { register, handleSubmit } = useForm();
    const style = {
        'courses-form__wrapper' : {
            display: 'flex',
            justifyContent: 'center',
        },
        form:{
            display: 'flex',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: '0 15px',
        },
        div:{
            padding: '0 11px',
        },
        select:{
            width: '100%',
            padding: '.3em .5em',
            height: '2.3em',
            backgroundColor: '#fff',
            border: '1px solid #706f6f',
        },
        input:{
            boxSizing: 'border-box',
            display: 'inline-block',
            padding: '.4em .5em',
            fontSize: '14px',
            verticalAlign: 'middle',
            border: '1px solid #706f6f',
            borderRadius:' 6px',
        },

    }
    const thing = ['Алгебра', 'Английский язык','Биология','География','Геометрия','Демо-версия','Информатика','История','Литература','Математика','Обществознание','Окружающий мир','Робототехника','Русский язык','Физика','Химия']
    const genre = ['Демо','Задачник','Подготовка к ВПР','Подготовка к ЕГЭ','Рабочая тетрадь']

    const onSubmit = data => {
        console.log(data)
        setValue(data);
    }


    return (
        <div className="courses-form__wrapper" style={style['courses-form__wrapper']}>
            <form style={style.form} className="courses-form form" id="filterform" role="form" onSubmit={handleSubmit(onSubmit)}>
                <div style={style.div}>
                    <select ref={register} style={style.select} id="subj" name="subj"  >
                        <option value="">Все предметы</option>
                        {
                            thing.map((item, key)=>{
                                return <option key={key}>{item}</option>
                            })
                        }
                    </select>
                </div>
                <div style={style.div}>
                    <select ref={register} style={style.select} id="genre" name="genre">
                        <option value="">Все жанры</option>
                        {
                            genre.map((item, key)=>{
                                return <option key={key}>{item}</option>
                            })
                        }
                    </select>
                </div>
                <div style={style.div}>
                    <select ref={register} style={style.select} id="grade" name="grade">
                        <option value="">Все классы</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                    </select>
                </div>
                <div style={style.div}>
                    <input ref={register} style={style.input} className="borderFind" type="text" placeholder="Поиск" id="search" name="search" value="" />
                        <button className="courses-form-search-btn" type="submit" title="Найти">Search</button>
                </div>
            </form>
        </div>
    )
}

export default Search