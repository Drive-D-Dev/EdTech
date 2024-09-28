import React, { FC, useEffect, useState } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { ExamAnswerResultResponse } from '@/model/examAnswerResultResponse';
import { useTheme } from 'next-themes';

// Constants
const totalTime = '300';

const TimerSummary: FC<{ fullTime: number; elapsedTime: number; theme: string }> = ({
	fullTime,
	elapsedTime,
	theme,
}) => {
	const percentage = (elapsedTime / fullTime) * 100;
	const circleStyle = {
		background: `conic-gradient(
	  #4caf50 ${percentage}%,
	  #e0e0e0 ${percentage}% 100%`,
	};

	return (
    <div className="flex items-center justify-center">
      <div className="relative w-32 h-32">
        {/* Outer circle with progress */}
        <div className="w-full h-full rounded-full" style={circleStyle} />
        <div
          className="absolute inset-3 rounded-full flex items-center justify-center"
          style={{ backgroundColor: theme === "light" ? "white" : "black" }}
        >
          {/* Center text */}
          <div className="text-center">
            <div className="text-xl font-bold">
              {Math.floor(elapsedTime / 60) +
                ":" +
                (elapsedTime % 60).toString().padStart(2, "0")}
            </div>{" "}
            {/* Time used */}
            <div className="text-sm">นาที</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const RetryButton: FC<{ retry: () => {} }> = ({ retry }) => (
// 	<Button variant='destructive' onClick={retry} className='flex items-center space-x-2'>
// 		<AlertCircle className='h-4 w-4' />
// 		<span>Failed to load, please try again</span>
// 		<RefreshCw className='h-4 w-4 ml-2' />
// 	</Button>
// );

const CardSummary: FC<{ data: ExamAnswerResultResponse | null; isLoading: boolean }> = ({
	data,
	isLoading,
}) => {
	const { theme } = useTheme();

	return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle className="text-lg">สรุป</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row space-x-4">
          <div>
            <TimerSummary
              fullTime={Number(totalTime)}
              elapsedTime={data ? Number(data.time) : 0}
              theme={theme!}
            />
            {/* Converted timeUsed and totalTime to numbers */}
          </div>
          <div className="flex flex-col space-y-2">
            <div
              className=" px-4 py-2 rounded-sm"
              style={{
                backgroundColor: theme === "light" ? "#DDDDDD" : "grey",
              }}
            >
              ถูกต้อง {data ? Math.floor(data.stat.percentage) : "-"}%
            </div>
            <div className="flex flex-row space-x-2">
              <div
                className=" px-4 py-2 rounded-sm"
                style={{
                  backgroundColor: theme === "light" ? "#bbf7d0" : "#4caf50EE",
                }}
              >
                ถูก {data ? data.stat.correct : "-"} ข้อ
              </div>
              <div
                className=" px-4 py-2 rounded-sm"
                style={{
                  backgroundColor: theme === "light" ? "#fecaca" : "#f44336AA",
                }}
              >
                ผิด {data ? data.stat.wrong : "-"} ข้อ
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardSummary;
