import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import { DataTable } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountriesData } from '../../redux/action';

const LiveUpdate = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountriesData())
    }, [dispatch]);

    const countries = useSelector((state) => state.data.countries);

    const itemsPerPage = 10;
    const [page, setPage] = useState(0);
    const from = ((page+1) * itemsPerPage) - 9;
    const to = (page+1) * itemsPerPage;

    let filterData = countries.filter((val, index) => {
        return index < to && index >= (from-1);
    });
    const renderData = () => {
        return (
            <>
                {
                    filterData ?
                    (
                        filterData.map((val, index) => {
                            return (
                                <DataTable.Row key={`${index}`}>
                                    <DataTable.Cell>
                                        {val.Country}
                                    </DataTable.Cell>
                                    <DataTable.Cell style={{ justifyContent: 'center' }} >
                                        {val.NewConfirmed}
                                    </DataTable.Cell>
                                    <DataTable.Cell style={{ justifyContent: 'center' }} >
                                        {val.TotalConfirmed}
                                    </DataTable.Cell>
                                    <DataTable.Cell style={{ justifyContent: 'center' }} >
                                        {val.TotalRecovered}
                                    </DataTable.Cell>
                                    <DataTable.Cell style={{ justifyContent: 'center' }} >
                                        {val.TotalDeaths}
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )
                        })
                    )
                    :
                    null
                }
            </>
        )
    };

    return (
        <View style={{flex: 1}}>
            <Header
                centerComponent={{ text: 'LIVE UPDATE', style: { fontWeight: 'bold', color:"#fff", fontSize: 23 } }}
                backgroundColor="#ff5e78"
            />
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title style={{ justifyContent: 'center' }}>Region</DataTable.Title>
                    <DataTable.Title style={{ justifyContent: 'center' }}>New Cases</DataTable.Title>
                    <DataTable.Title style={{ justifyContent: 'center' }}>Total Cases</DataTable.Title>
                    <DataTable.Title style={{ justifyContent: 'center' }}>Recovered</DataTable.Title>
                    <DataTable.Title style={{ justifyContent: 'center' }}>Deaths</DataTable.Title>
                </DataTable.Header>
                {renderData()}
                <DataTable.Pagination
                    page={page}
                    numberOfPages={Math.ceil(countries.length/itemsPerPage)}
                    onPageChange={page => setPage(page)}
                    label={`${from} - ${to} of ${countries.length}`}
                />
            </DataTable>
        </View>
    );
}
 
export default LiveUpdate;