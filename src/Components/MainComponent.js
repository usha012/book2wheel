
import { useState } from 'react';
import { CategoryFillters } from '../Components/CategoryFillters';
import Products from '../Components/Products';
import { SearchVehicles } from '../Components/SearchVehicles';
import TopHeader from '../Components/TopHeader';

function MainComponent() {

    const [searchToggle, setSearchToggle] = useState(true)


    return (
        <>
            {searchToggle ?
                <>
                    <TopHeader setSearchToggle={setSearchToggle} />
                    <CategoryFillters />
                    <Products />
                </> :
                <SearchVehicles setSearchToggle={setSearchToggle}/>
            }
        </>
    );
}

export default MainComponent;