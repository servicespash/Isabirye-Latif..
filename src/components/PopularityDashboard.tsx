import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { db } from '../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

interface PopularityData {
  name: string;
  views: number;
  avgRating: number;
}

export const PopularityDashboard: React.FC = () => {
  const [data, setData] = useState<PopularityData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const popSnapshot = await getDocs(collection(db, 'templatePopularity'));
      const ratingSnapshot = await getDocs(collection(db, 'templateRatings'));
      
      const ratingsByTemplate: { [key: string]: { sum: number, count: number } } = {};
      ratingSnapshot.docs.forEach(doc => {
          const { templateId, rating } = doc.data();
          if (!ratingsByTemplate[templateId]) {
              ratingsByTemplate[templateId] = { sum: 0, count: 0 };
          }
          ratingsByTemplate[templateId].sum += rating;
          ratingsByTemplate[templateId].count += 1;
      });

      const formattedData: PopularityData[] = popSnapshot.docs.map(doc => {
        const views = doc.data().views;
        const avgRating = ratingsByTemplate[doc.id] ? ratingsByTemplate[doc.id].sum / ratingsByTemplate[doc.id].count : 0;
        const data = {
          name: doc.id,
          views: typeof views === 'number' ? views : 0,
          avgRating
        };
        console.log('Formatted Data Item:', data);
        return data;
      });
      setData(formattedData);
    };
    fetchData();
  }, []);

  return (
    <div className="h-64 bg-[#111625] border border-gray-800 rounded-2xl p-6">
      <h3 className="text-sm font-bold text-white mb-4">Template Popularity & Ratings</h3>
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#64748b" fontSize={10} />
            <YAxis stroke="#64748b" fontSize={10} />
            <Tooltip contentStyle={{ backgroundColor: '#090D1A', border: '1px solid #1e293b' }} />
            <Bar dataKey="views" fill="#3b82f6" name="Views" />
            <Bar dataKey="avgRating" fill="#fbbf24" name="Avg Rating" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <div className="text-gray-500 text-xs text-center pt-10">No data available</div>
      )}
    </div>
  );
};
