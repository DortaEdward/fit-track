import { BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { TabsContent } from "~/components/ui/tabs";

export default function AnalyticsTab(){
    return(
<TabsContent value="analytics" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Progress Analytics</CardTitle>
                                    <CardDescription>Track your fitness progress over time</CardDescription>
                                </CardHeader>
                                <CardContent className="h-[300px] flex items-end gap-2">
                                    <div className="h-full w-full flex items-center justify-center">
                                        <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
                                        <p className="text-muted-foreground ml-2">Analytics data will appear here</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
    )
}